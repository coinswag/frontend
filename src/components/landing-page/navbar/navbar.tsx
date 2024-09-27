import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Hero from "../hero/hero";
import NavMobileView from "./nav-mobile-view";

export default function Navbar() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible(!visible);
  };

  const isActive = (path: string) => location.pathname === path;
  return (
    <main className=" bg-[url('/Images/lines.svg')] bg-center relative">
      <div className="absolute inset-0  bg-[linear-gradient(179.6deg,#6C6C6C_-91.58%,rgba(153,153,153,0.5)_-88.6%,#333333_66.8%)]"></div>
      <nav
        className={` flex-col items-center px-4 lg:px-10 md:px-5 py-3 fixed top-0 w-full  mx-auto z-50  h-16 bg-cover bg-center" `}
      >
        <div className=" flex flex-row justify-between items-center .max-w-[1240px] mx-auto relative text-[#FFFFFFB2]">
          <div className=" ">
            <NavLink to="/">
              <img src="/Images/logo.svg" alt="Logo" className=" md:mt-8" />
            </NavLink>
          </div>

          <div className="  ">
            <ul className="md:flex hidden md:flex-row lg:gap-9 gap-3 text-[17px] ">
              <li className=" ">
                <NavLink
                  to="/"
                  className={`${
                    isActive("/")
                      ? "bg-[#1E1E1E] py-1 px-4 rounded-2xl align-middle"
                      : ""
                  }`}
                >
                  Home
                </NavLink>
              </li>
              <li className=" ">
                <NavLink
                  to="/merchandise"
                  className={`${
                    isActive("/merchandise")
                      ? "bg-[#1E1E1E] py-1 px-4 rounded-2xl align-middle"
                      : ""
                  }`}
                >
                  Merchandise
                </NavLink>
              </li>
              <li className=" ">
                <NavLink
                  to="/about"
                  className={`${
                    isActive("/about")
                      ? "bg-[#1E1E1E] py-1 px-4 rounded-2xl"
                      : ""
                  }`}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>

          <div className=" hidden md:block">
            <button className=" text-center bg-[#4F46E5] text-white py-1 px-6 rounded-2xl flex justify-center  align-middle items-center gap-1">
              <Link to={"/register"}>Get started</Link>
              <img src="/Icons/arrow.svg" alt="arrow " />
            </button>
          </div>

          <div className={`md:hidden`}>
            <img
              src="/Icons/menu.svg"
              alt=""
              onClick={handleToggle}
              className=" w-8 brightness-100 invert"
            />
          </div>
        </div>
        <div className=" bg-[#191919]">
          <NavMobileView visible={visible} handleToggle={handleToggle} />
        </div>
      </nav>
      <div className=" relative">
        <Hero />
      </div>
    </main>
  );
}
