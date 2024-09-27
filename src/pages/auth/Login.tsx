import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

import BackButton from "@/lib/back-button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="bg-black h-screen m-0 p-0 overflow-y overflow-x-hidden flex flex-col justify-center items-center space-y-4 px-6 sm:px-0">
      <BackButton />
      <div className=" flex flex-col items-center">
        <h1 className=" text-3xl font-[700]">Welcome you Back!</h1>
        <p className=" text-[#ffffffb2]">Let’s get you signed in</p>
      </div>
      {/* <div className=" space-y-4 mt-"> */}
      <Input placeholder="Enter email address" type="text" />
      <Input type="password" placeholder="Password" />

      <div className=" flex space-x-2 text-start sm:w-[400px] w-full">
        <Switch />
        <p className=" text-[#ffffffd4]">Remember me</p>
      </div>

      <div className="flex flex-row sm:w-[400px] w-full">
        <button className=" text-center bg-[#4F46E5] w-full text-[#FFFFFFB2] py-2 sm:px-6 px-3  rounded-3xl flex justify-center items-center gap-1">
          Login
        </button>
      </div>

      <div className="relative flex items-center sm:w-[400px] w-full">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400">Or</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>

      <div className="flex flex-row sm:w-[400px] w-full ">
        <button className=" text-center bg-[#4F46E5] w-full text-[#FFFFFFB2] py-2 sm:px-6 px-3 rounded-3xl flex justify-center items-center gap-1 align-middle space-x-1">
          <img src="/Icons/google.svg" alt="arrow " />
          <Link to={"/register"}>Sign in with Google</Link>
        </button>
      </div>

      <p className=" text-center text-[#ffffff4d]">
        Dont't have an acount?
        <Link to={"/register"} className=" text-[#282373]">
          Sign up
        </Link>
      </p>
      {/* </div> */}
    </main>
  );
}
export default Login;
