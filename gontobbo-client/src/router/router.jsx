import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import "aos/dist/aos.css";
import Aos from "aos";
import authRouter from "./authRouter";
import GeminiChatBox from "../hooks/GeminiChatBox";
import GontobboZones from "../pages/gontobboZones_refactored/GontobboZones";
import SendParcel from "../pages/SendParcel_refactored/SendParcel";
import DashboardLayout from "../layout/DashboardLayout";

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
        path: "send-parcel",
        element: <SendParcel />,
      },
      {
        path: "chatbot",
        element: <GeminiChatBox />,
      },
    ],
  },
  authRouter,

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "my-parcel",
        element: <div>My Parcel</div>,
      },
    ],
  },
]);

export default router;
