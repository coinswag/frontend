import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import BackButton from "@/lib/back-button";
import { Link } from "react-router-dom";

function Register() {
  return (
    <main className=" bg-black h-screen m-0 p-0 overflow-y-hidden flex flex-col justify-center items-center">
      <BackButton />
      <div className=" flex flex-col items-center p-4">
        <h1 className=" text-3xl font-[700]">New user?</h1>
        <p className=" text-[#ffffffb2]">Let’s get you signed up</p>
      </div>

      <div className=" space-y-4 px-6 sm:px-0">
        <Input placeholder="Username" type="text" />
        <Input type="email" placeholder="Enter email address" />
        <Input type="password" placeholder="Password" />

        <div className=" flex flex-row sm:w-[400px] w-full space-x-2 items-center justify-center">
          <Checkbox />
          <p className=" text-[#ffffffb2]">
            By opening an account you agree to the terms and conditions of our{" "}
            <span>
              <Link to={"/#privacy"} className=" text-[#282373]">
                privacy policy
              </Link>
            </span>
          </p>
        </div>

        <div className="flex flex-row sm:w-[400px] w-full ">
          <button className=" text-center bg-[#4F46E5] w-full text-[#FFFFFFB2] py-2 sm:px-6 px-3  rounded-3xl flex justify-center items-center gap-1">
            Sign up
          </button>
        </div>

        <p className=" text-center text-[#ffffff4d]">
          Already have an account?{" "}
          <Link to={"/login"} className=" text-[#282373]">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
export default Register;
