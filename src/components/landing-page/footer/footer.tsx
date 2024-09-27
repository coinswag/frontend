import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-[#202020]  flex flex-col py-5 text-[18px] mt-12 md:p-12 p-6 ">
      <div className="max-w-[1240px] w-full mx-auto">
        <div className=" justify-center items-center flex  flex-row">
          <ul className="flex sm:flex-row flex-col text-center lg:gap-9 gap-3 font-[500]">
            <li className="">
              <NavLink to="/">
                <img
                  src="/Images/logo.svg"
                  alt="Logo"
                  className="block sm:hidden mx-auto"
                />
              </NavLink>
            </li>
            <li className=" ">
              <NavLink to="/#" className={`${" align-middle"}`}>
                Benefits
              </NavLink>
            </li>
            <li className=" ">
              <NavLink to="/#" className={`${" align-middle"}`}>
                Services
              </NavLink>
            </li>
            <li className=" ">
              <NavLink to="/#" className={`${" align-middle"}`}>
                Integration
              </NavLink>
            </li>
            <li className=" ">
              <NavLink to="/#" className={`${" align-middle"}`}>
                Book a demo
              </NavLink>
            </li>
          </ul>
        </div>

        <div className=" flex sm:flex-row flex-col sm:justify-between mt-8 items-center justify-center">
          <div className=" ">
            <NavLink to="/">
              <img
                src="/Images/logo.svg"
                alt="Logo"
                className="hidden sm:block"
              />
            </NavLink>
          </div>

          <div className=" flex flex-row text-center order-2 sm:order-1">
            <ul className=" flex sm:flex-row flex-col text-center items-center justify-between sm:gap-4">
              <li className=" mt-2 sm:mt-0">
                <NavLink to="/#" className={`${" align-middle"}`}>
                  Terms
                </NavLink>
              </li>

              <li className=" ">
                <NavLink to="/#" className={`${" align-middle"}`}>
                  Policy
                </NavLink>
              </li>

              <li className=" ">
                <NavLink to="/#" className={`${" align-middle"}`}>
                  Cookies
                </NavLink>
              </li>
            </ul>
          </div>

          <div className=" flex flex-row order-1 sm:order-2 ">
            <Link to={"/#"}>
              <img src="/Images/TwitterX.svg" alt="Twitter" />
            </Link>
            <Link to={"/#"}>
              <img src="/Images/facebook.svg" alt=" facebook" />
            </Link>
            <Link to={"/#"}>
              <img src="/Images/LinkedIn.svg" alt="Linkedln" />
            </Link>
          </div>
        </div>

        <div className=" text-center">
          <p className=" text-[#797979]">
            <span className=" text-[20px]">&#169; </span>2024 - All Rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
