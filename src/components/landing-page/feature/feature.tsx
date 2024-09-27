import SectionTitle from "@/lib/section-title";

const Feature = () => {
  return (
    <main className="abscolute w-full bg-[url('/Images/star.svg')] bg-center mx-auto pb-28 flex flex-col items-center justify-center md:p-12 p-6 max-w-[1240px]">
      <div
        className=" relative top-8 shadow-inner border flex flex-col items-center justify-center bg-[#202020] rounded-[30px] pt-3"
        style={{ boxShadow: "0 1px 6px #00000005" }}
      >
        <div
          className=" p-10 px-5 flex flex-col justify-center items-center"
          style={{ boxShadow: "0 1px 6px #00000005" }}
        >
          <SectionTitle title="Features" />
          <div className=" md:text-[28px] text-2xl w-full flex justify-center items-center text-center flex-col font-[700] mt-3 ">
            <h1>Top-notch designs,</h1>
            <h1>delivered at your doorsteps</h1>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 space-y-3 mt-10">
            <div className="flex flex-col items-center justify-center text-center flex-1 h-full">
              <div className=" text-center">
                <img src="/Images/Wallet.svg" alt="wallet img" />
              </div>
              <h1 className=" text-[18px] font-[500] ">Receive the magic</h1>
              <p className="text-[#FFFFFFB2]">
                Choose a plan and share your design project details with us
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center flex-1 h-full">
              <div className=" text-center">
                <img src="/Images/product.svg" alt="wallet img" />
              </div>
              <h1 className=" text-[18px] font-[500] ">Tell us your vision</h1>
              <p className="text-[#FFFFFFB2]">
                Sit back and relax: our expert designers will turn your vision
                into reality
              </p>
            </div>

            <div className="flex flex-col items-center justify-center text-center flex-1 h-full">
              <div className=" text-center">
                <img src="/Images/sell.svg" alt="wallet img" />
              </div>
              <h1 className=" text-[18px] font-[500] ">Get ongoing support</h1>
              <p className="text-[#FFFFFFB2]">
                Your subscription ensures that you have a continuous access to
                our design team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Feature;
