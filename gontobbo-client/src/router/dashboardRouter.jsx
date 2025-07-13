import DashboardLayout from "../layout/DashboardLayout";
import MyParcels from "../pages/dashboard/MyParcels/MyParcels";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHistory from "../pages/dashboard/PaymentHistory/PaymentHistory";
import BeARider from "../pages/dashboard/Rider/BeARider/BeARider";
import PrivateRoute from "./PrivateRoute";

const dashboardRouter = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      path: "my-parcel",
      element: (
        <PrivateRoute>
          <MyParcels />,
        </PrivateRoute>
      ),
    },
    {
      path: "payment/:parcelId",
      element: <Payment />,
    },
    {
      path: "payment-history",
      element: <PaymentHistory />,
    },
  ],
};

export default dashboardRouter;
