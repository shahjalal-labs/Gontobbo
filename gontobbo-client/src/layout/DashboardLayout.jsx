import { Link, Outlet } from "react-router";
import BrandLogo from "../pages/shared/BrandLogo/BrandLogo";

import {
  HomeIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  TruckIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const DashboardLayout = () => {
  const navLinks = [
    { path: "/", label: "Home", icon: HomeIcon },
    {
      path: "/dashboard/my-parcel",
      label: "My Parcels",
      icon: ClipboardDocumentListIcon,
    },
    {
      path: "/dashboard/payment-history",
      label: "Payment History",
      icon: CreditCardIcon,
    },
    {
      path: "/dashboard/track-package",
      label: "Track a Package",
      icon: TruckIcon,
    },
    {
      path: "/dashboard/active-rider",
      label: "Active Riders",
      icon: TruckIcon,
    },
    {
      path: "/dashboard/pending-rider",
      label: "Pending Riders",
      icon: TruckIcon,
    },

    {
      path: "/dashboard/update-profile",
      label: "Update Profile",
      icon: UserCircleIcon,
    },
  ];

  return (
    <div className="drawer lg:drawer-open min-h-screen max-container">
      {/* Drawer Toggle Checkbox */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Page Content */}
      <div className="drawer-content flex flex-col">
        {/* Navbar for Small Devices */}
        <div className="w-full navbar bg-base-300 lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block h-6 w-6 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 font-semibold text-lg">Dashboard</div>
        </div>

        {/* Page Content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-2">
          <BrandLogo />
          {navLinks.map(({ path, label, icon: Icon }) => (
            <li key={path}>
              <Link
                to={path}
                className="flex items-center gap-3 font-semibold text-gray-600 hover:text-indigo-600 transition"
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
