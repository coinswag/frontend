import { InputOTPControlled } from "@/components/ui/OtpBox";
import BackButton from "@/lib/back-button";
import { Link } from "react-router-dom";

function Otp() {
  return (
    <main className=" bg-black h-screen m-0 p-0 overflow-y-hidden overflow-x-hidden flex flex-col justify-center items-center px-6">
      <BackButton />

      <div className=" space-y-3 flex flex-col justify-center items-center">
        <img src="Images/profile.svg" alt="user profile" />
        <p className=" text-[#FFFFFF80]  text-[18px] text-center">
          Enter the code sent to johhdoe@yahoo.com
        </p>
        <InputOTPControlled />

        <p className=" text-center text-[#FFFFFF80] text-[18px]">
          Didn’t receive the email?{" "}
          <Link to={"/otp"} className=" text-[#282373]">
            Resend code
          </Link>
        </p>

        <div className="flex flex-row sm:w-[400px] w-full ">
          <button className=" text-center bg-[#4F46E5] w-full text-[#FFFFFF80] py-2 sm:px-6 px-3  rounded-3xl flex justify-center items-center gap-1">
            Verify
          </button>
        </div>
      </div>
    </main>
  );
}
export default Otp;
