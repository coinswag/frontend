import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

function SharedLayout() {
  return (
    <div className=" relative z-0 ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default SharedLayout;
