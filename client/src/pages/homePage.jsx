import { ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";

import Profile from "../assets/socialMediaUsers.svg";

function HomePage() {
  return (
    <main className="min-h-[calc(100dvh-6rem)] px-4 py-6 sm:min-h-[calc(100dvh-7.188rem)] sm:px-8 md:min-h-[calc(100dvh-7.688rem)] md:px-12">
      <section className="max-w-6xl mx-auto space-y-3">
        <h2 className="font-semibold tracking-wide font-BrunoAceSC text-copylight">
          General room
        </h2>
        <ul role="list" className="divide-y-2 divide-border">
          <li className="px-1 py-3 rounded background_animations bg-foreground font-Raleway hover:bg-themebtnbg sm:py-4">
            <Link to={`/general-room`}>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="object-contain w-10 h-10 border-2 border-blue-600 rounded-full"
                    src={Profile}
                    alt="group"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium tracking-wide truncate text-copy">
                    Place for all
                  </p>
                  <p className="text-xs font-medium tracking-wide truncate text-copylighter">
                    public chat
                  </p>
                </div>
                <div className="inline-flex items-center p-1 rounded-md text-copylight">
                  <ChevronRight fontSize="small" />
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default HomePage;
