import { Outlet } from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Location from "../modals/LocationModal.jsx";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Location />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
