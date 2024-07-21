import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/mainLayout/MainLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);


export default router