import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "sonner";
import { Forum } from "@mui/icons-material";

import Store from "../context/store";
function Navbar() {
  const store = useContext(Store);

  const logoutHandler = async () => {
    await store.logout();
    localStorage.removeItem("jwt_token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_email");
    toast.success("Logged out successfully", {
      position: "top-center",
    });
  };

  return (
    <header className="px-4 backdrop-blur-sm sm:px-8 md:px-12">
      <div className="flex items-center justify-between max-w-6xl py-3 mx-auto border-b-2 border-border sm:py-5">
        <NavLink to="/" className="flex items-center sm:space-x-1">
          <p className="hidden font-semibold tracking-widest sm:text- font-BrunoAceSC text-copy sm:block">
            Chatapp
          </p>
          <Forum className="text-primarylight" fontSize="large" />
        </NavLink>
        {!store.isLoggedin ? (
          <nav className="flex items-center space-x-1 text-sm font-medium font-Raleway sm:space-x-2">
            <NavLink
              to="/login"
              className="background_animations px-1 py-1 text-copy hover:text-primary sm:border-2 sm:border-primary sm:px-3 sm:text-primarycontent sm:hover:bg-primary sm:hover:text-primarycontent md:px-5 md:py-1.5"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="background_animations px-1 py-1 text-copy hover:text-primary sm:border-2 sm:border-primary sm:px-3 sm:text-primarycontent sm:hover:bg-primary sm:hover:text-primarycontent md:px-5 md:py-1.5"
            >
              Signup
            </NavLink>
          </nav>
        ) : (
          <button
            onClick={logoutHandler}
            type="button"
            className="background_animations px-1 py-1 font-Raleway text-sm font-medium text-custompink hover:text-copy sm:border-2 sm:border-custompink sm:px-3 sm:text-primarycontent sm:hover:bg-custompink md:px-5 md:py-1.5"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}

export default Navbar;
