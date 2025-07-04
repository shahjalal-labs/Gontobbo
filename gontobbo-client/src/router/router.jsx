import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import "aos/dist/aos.css";
import Aos from "aos";
import authRouter from "./authRouter";
import GontobboZones from "../pages/gontobboZones/GontobboZones";

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
        path: "gontobbo-zones",
        Component: GontobboZones,
      },
      {
        path: "chk",
        // Component: Chk,
      },
    ],
  },
  authRouter,
]);

export default router;
