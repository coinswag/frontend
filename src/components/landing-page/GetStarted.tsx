import SectionTitle from "@/lib/section-title";

import { useConnect } from "@particle-network/authkit";

function GetStarted() {
  const { connect, connected } = useConnect();

  // Handle user login
  const handleLogin = async () => {
    if (!connected) {
      const userInfo = await connect({
        email: "",
      });
      console.log("userInfo", userInfo);
    }
  };

  return (
    <section className="flex flex-col items-center w-[60%]  border border-gray-500 mx-auto bg-[#5d5c5cab]  backdrop rounded-[1.3rem] py-10 my-10 shadow-2xl relative">
      <img
        src="/Images/star.svg"
        alt=""
        className="absolute top-0 left-1/2 -translate-x-1/2"
      />
      <SectionTitle title="Get Started" />
      <h1 className="font-manrope text-4xl text-center leading-[3.3rem]">
        Start purchasing well desinged <br /> merch with solana
      </h1>
      <button
        onClick={handleLogin}
        className="bg-violet-500 px-12 rounded-[1.5rem] py-3 text-sm font-semibold mt-12 "
      >
        Get Started
      </button>
    </section>
  );
}
export default GetStarted;
