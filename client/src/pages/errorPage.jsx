import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <main className="flex items-center h-screen">
      <div className="flex flex-col items-center w-full px-4 py-4 space-y-2 sm:px-8 md:px-12">
        <p className="text-sm font-medium text-center text-red-600 font-Raleway">
          404 Page not found
        </p>
        <Link
          to="/"
          className="max-w-xs px-6 py-1 text-sm tracking-wide rounded bg-primary font-Raleway text-primarycontent"
        >
          Go back
        </Link>
      </div>
    </main>
  );
}

export default ErrorPage;
