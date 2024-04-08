import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./navbar";
import Footer from "./footet";

function NavbarWrapper() {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default NavbarWrapper;
