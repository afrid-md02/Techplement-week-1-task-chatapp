import { ChevronLeft } from "@mui/icons-material";
import { Link } from "react-router-dom";

import Profile from "../assets/socialMediaUsers.svg";

function GeneralChatHeader() {
  return (
    <header className="flex items-center w-full py-3 space-x-2 border-b-2 border-border">
      <Link to="/">
        <ChevronLeft fontSize="medium" className="text-copy" />
      </Link>
      <div>
        <img
          className="object-contain w-10 h-10 border-2 border-blue-600 rounded-full"
          src={Profile}
          alt="group"
        />
      </div>
      <h1 className="text-sm font-medium tracking-wide font-Raleway text-copy">
        Place for all
      </h1>
    </header>
  );
}

export default GeneralChatHeader;
