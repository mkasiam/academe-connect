import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";

const Root = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto font-inter">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
