import DashboardLayout from "../layout/DashboardLayout";
import MyParcels from "../pages/dashboard/MyParcels/MyParcels";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHistory from "../pages/dashboard/PaymentHistory/PaymentHistory";
import ActiveRiders from "../pages/dashboard/Rider/ActiveRider/ActiveRiders";
import PendingRiders from "../pages/dashboard/Rider/PendingRiders/PendingRiders";
import PrivateRoute from "./PrivateRoute";

const dashboardRouter = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      path: "my-parcel",
      element: (
        <PrivateRoute>
          <MyParcels />
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

    {
      path: "pending-rider",
      element: (
        <PrivateRoute>
          <PendingRiders />
        </PrivateRoute>
      ),
    },
    {
      path: "active-rider",
      element: (
        <PrivateRoute>
          <ActiveRiders />
        </PrivateRoute>
      ),
    },
  ],
};

export default dashboardRouter;
