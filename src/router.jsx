import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/mainLayout/MainLayout";
import IdentityLayout from "./layouts/identityLayout/IdentityLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

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
