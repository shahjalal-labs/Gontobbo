import { Link, Outlet } from "react-router";
import BrandLogo from "../pages/shared/BrandLogo/BrandLogo";

const DashboardLayout = () => {
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/dashboard/my-parcel", label: "My Parcels" },
    { path: "/dashboard/payment-history", label: "Payment History" },
    { path: "/dashboard/track-package", label: "Track a Package" },
    { path: "/dashboard/update-profile", label: "Update Profile" },
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
          <div className="flex-1 px-2">Dashboard</div>
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
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link to={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
