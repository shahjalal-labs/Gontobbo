import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import "aos/dist/aos.css";
import Aos from "aos";
import AuthLayout from "../layout/AuthLayout";

Aos.init();

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "chk",
        // Component: Chk,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
  },
]);

export default router;
