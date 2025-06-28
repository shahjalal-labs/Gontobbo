import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar/Navbar";
import Benefits from "../pages/Home/Benefits/Benefits";
import { BeMerchant } from "../pages/Home/Home/import";

const AuthLayout = () => {
  return (
    <div>
      <Navbar />
      <h1>AuthLayout</h1>
      <div className="min-h-[70vh] border">
        <Outlet />
      </div>
      <Benefits />
      <BeMerchant />
    </div>
  );
};

export default AuthLayout;
