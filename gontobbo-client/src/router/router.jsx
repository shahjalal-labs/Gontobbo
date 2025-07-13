import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home/Home";
import "aos/dist/aos.css";
import Aos from "aos";
import authRouter from "./authRouter";
import GeminiChatBox from "../hooks/GeminiChatBox";
import GontobboZones from "../pages/gontobboZones_refactored/GontobboZones";
import SendParcel from "../pages/SendParcel_refactored/SendParcel";
import dashboardRouter from "./dashboardRouter"; // ✅ Imported
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <SendParcel />
          </PrivateRoute>
        ),
      },
      {
        path: "chatbot",
        element: <GeminiChatBox />,
      },
    ],
  },
  authRouter,
  dashboardRouter,
]);

export default router;
