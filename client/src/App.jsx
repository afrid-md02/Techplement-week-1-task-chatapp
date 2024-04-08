import { Fragment, lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import NavbarWrapper from "./layout/navbarWrapper";
import LazyLoader from "./components/loaders/lazyLoader";
import useInitialValues from "./hooks/useInitialValues";

const HomePage = lazy(() => import("./pages/homePage"));
const LoginPage = lazy(() => import("./pages/loginPage"));
const SignupPage = lazy(() => import("./pages/signupPage"));
const GeneralChatPage = lazy(() => import("./pages/generalChatPage"));
const ErrorPage = lazy(() => import("./pages/errorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LazyLoader />}>
        <NavbarWrapper />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/general-room",
    element: (
      <Suspense fallback={<LazyLoader />}>
        <GeneralChatPage />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<LazyLoader />}>
        <ErrorPage />,
      </Suspense>
    ),
  },
]);

function App() {
  const { fetchDataFromCookies } = useInitialValues(
    "jwt_token",
    "user_id",
    "user_name",
    "user_email",
  );

  useEffect(() => {
    fetchDataFromCookies();
  }, []);

  return (
    <Fragment>
      <Toaster
        richColors={true}
        closeButton={true}
        style={{ fontFamily: "Raleway" }}
      />
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
