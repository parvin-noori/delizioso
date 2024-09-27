import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/main-layout/MainLayout";
import IdentityLayout from "./layouts/identity-layout/IdentityLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
