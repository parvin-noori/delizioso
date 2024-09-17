import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/mainLayout/MainLayout";
import IdentityLayout from "./layouts/identityLayout/IdentityLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import SignUp from "./pages/SignUp";

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
    ],
  },
]);

export default router;
