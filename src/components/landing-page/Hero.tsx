import { createUserWaitList } from "@/firebase/firebase.waitlist";
import showToast from "@/lib/utils";
import { FirebaseError } from "firebase/app";
import { useEffect, useState } from "react";

const Hero = () => {
	const [currentMerch, setCurrentMerch] = useState("black");

	const [userEmail, setUserEmail] = useState("");

	// const [merchSearch, setMerchSearch] = useState("");

	const handleMerchSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserEmail(e.target.value);
	};

	const handleAddUser = async () => {
		showToast.loading("Loading");
		if (!userEmail) {
			return showToast.error("Input field cannot be empty");
		}
		try {
			await createUserWaitList(userEmail);
			return showToast.success("Email added successfully");
		} catch (error) {
			if (error instanceof FirebaseError) {
				console.log(error.message);
				showToast.error(error.message);
			}
			showToast.error("An error occured, please try again");
		}
	};

	useEffect(() => {
		const merch = ["black", "green", "purple"];
		const interval = setInterval(() => {
			setCurrentMerch((prevMerch) => {
				const currentIndex = merch.indexOf(prevMerch);
				const nextIndex = (currentIndex + 1) % merch.length;
				return merch[nextIndex];
			});
		}, 2000);

		return () => clearInterval(interval);
	}, []);
	// 	Coinswag: Where Digital Assets Meet Physical Swag
	// Revolutionizing Web3 Merchandise for Creators and Communities
	// Turn your NFTs into limited-edition hoodies and more.
	return (
		<section className='bg-[url("/Images/lines.svg")] bg-cover bg-center text-center  items-center justify-center relative ellow-400  mx-auto w-full h-screen flex overflow-hidden'>
			<div className=' relative bottom-[20%] flex flex-col items-center z-10'>
				<h1 className='leading-[1.2] font-quicksand text-5xl font-bold'>
					Web3 Social Commerce <br />
					Platform For Creators and Brands
				</h1>

				<p className=' text-center text-[#FFFFFFB2] text-md mt-6 w'>
					Coinswag is bridging the gap between digital assets and physical
					merchandise in the Web3 era. <br /> We empower creators, NFT
					artists, and DAOs to transform their digital presence into
					tangible, wearable assets.
				</p>

				<div className=' pr-1 flex border border-[#474747] rounded-3xl overflow-hidden items-center justify-between mt-6 w-[80%] h-12 backdrop-blur-lg bg-[#222222] shadow-custom-dark'>
					<input
						type='text'
						value={userEmail}
						placeholder='Enter your email'
						onChange={handleMerchSearch}
						className='sm:px-4 px-3 py-2  outline-none  flex-1'
					/>
					<button
						onClick={handleAddUser}
						className=' text-center bg-[#4F46E5] text-[#FFFFFFB2] py-1 sm:px-6 px-2  rounded-3xl flex justify-center items-center gap-1 h-[78%] text-sm'>
						{/* <img
							src='/Icons/search.svg'
							alt='search icon '
							className='w-4 brightness-100 invert'
						/> */}
						Go waitlist
					</button>
				</div>
			</div>
			<div className='absolute h-full w-full '>
				<img
					src='/Images/cap.svg'
					alt='Cap merch'
					className='absolute top-[153px] md:top-[90px] left-0 object-cover sm:block hidden animate-up-down'
				/>

				<img
					src='/Images/mug.svg'
					alt='mug mercch'
					className='  absolute md:top-[90px] top-[186px] bottom-10 right-0 object-cover w-[185px] sm:block hidden animate-up-down delay-500'
				/>

				<img
					src='/Images/left-merch.svg'
					alt='left-merch'
					className='absolute hidden lg:block bottom-0 .top-[263px] left-0 .w-[240px] object-cover '
				/>

				<img
					src={`/Images/${currentMerch}-merch.png`}
					alt='Cloth merch'
					className=' absolute -bottom-[10%] left-1/2 -translate-x-1/2 h-[57%]'
				/>

				<img
					src='/Images/right-merch.svg'
					alt='right-merch'
					className='absolute hidden lg:block  bottom-0 right-0 .top-[263px] .w-[240px]  '
				/>
			</div>
		</section>
	);
};

export default Hero;
