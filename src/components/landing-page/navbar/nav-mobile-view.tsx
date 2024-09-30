import { Link, NavLink } from "react-router-dom";

type input = {
  visible: boolean;
  handleToggle: () => void;
};
const NavMobileView = ({ visible, handleToggle }: input) => {
  if (!visible) {
    return null;
  } else {
    return (
      <div
        className="text-left fixed inset-y-0 right-0 w-1/2 bg-[#333333] h-screen px-3 py-7 "
        onClick={handleToggle}
      >
        <div>
          <ul className=" flex md:hidden  justify-center items-center flex-col gap-3 ">
            <li className=" ">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className=" ">
              <NavLink to="/#about">Merchandise</NavLink>
            </li>
            <li className=" ">
              <NavLink to="/about">About</NavLink>
            </li>
            <button className=" bg-[#4F46E5] flex-row text-[13px] text-white py-1 px-6 rounded-2xl flex justify-center items-center gap-1">
              <Link to={"/register"}>Get started</Link>
              <img src="/Icons/arrow.svg" alt="arrow " />
            </button>
          </ul>
        </div>
      </div>
    );
  }
};

export default NavMobileView;
