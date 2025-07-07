import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import "aos/dist/aos.css";
import Aos from "aos";
import authRouter from "./authRouter";
import GontobboZones from "../pages/gontobboZones/GontobboZones";
import SendParcelForm from "../pages/SendParcel/SendParcel";
import SendParcel from "../pages/SendParcel/SendParcel";
import GeminiChatBox from "../hooks/GeminiChatBox";

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
]);

export default router;
