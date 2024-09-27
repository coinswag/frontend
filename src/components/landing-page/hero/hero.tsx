const Hero = () => {
  return (
    <div className=" text-center  items-center justify-center relative md:pt-28 pt-20 ellow-400  mx-auto w-full">
      <div className=" flex flex-col space-y-5 items-center justify-center">
        <div className="align-middle lg:text-[43px] md:text-3xl text-2xl text-center font-[700] leading-10 text-[#FFFFFF]">
          <h1 className="leading-[1.2] ">The Web3 Platform For</h1>
          <h1 className="leading-[1.2]">Community-driven Merchandise</h1>
        </div>

        <div className=" text-center mx-auto md:w-1/2 w-full p-3">
          <p className=" text-center text-[#FFFFFFB2] text-lg ">
            Coinswag is a platform that enables creators and communities to
            effortlessly create storefronts and sell merch and branded items,
            powered by blockchain technology and crypto payments.
          </p>
        </div>

        <div className="flex border rounded-3xl overflow-hidden shadow-2xl ">
          <input
            type="text"
            placeholder="Enter name of store"
            className="sm:px-4 px-3 py-2 bg-none border-r-0 outline-none placeholder-[#FFFFFFB2]"
          />
          <button className=" text-center bg-[#4F46E5] text-[#FFFFFFB2] py-1 sm:px-6 px-3  rounded-3xl flex justify-center items-center gap-1">
            <img
              src="/Icons/search.svg"
              alt="search icon "
              className="w-6 brightness-100 invert"
            />
            Search
          </button>
        </div>
      </div>
      <div className=" md:flex">
        <div>
          <img
            src="/Images/cap.svg"
            alt="Cap merch"
            className="absolute top-[153px] md:top-[90px] left-0 object-cover sm:block hidden"
          />
        </div>

        <div>
          <img
            src="/Images/mug.svg"
            alt="mug mercch"
            className="  absolute md:top-[90px] top-[186px] bottom-10 right-0 object-cover w-[185px] sm:block hidden "
          />
        </div>

        <div>
          <img
            src="/Images/left-merch.svg"
            alt="left-merch"
            className="absolute hidden lg:block bottom-0 .top-[263px] left-0 .w-[240px] object-cover "
          />
        </div>

        <img
          src="/Images/merch.svg"
          alt="Cloth merch"
          className=" mt-5 abs mx-auto relative"
        />

        <div>
          <img
            src="/Images/right-merch.svg"
            alt="right-merch"
            className="absolute hidden lg:block  bottom-0 right-0 .top-[263px] .w-[240px]  "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
