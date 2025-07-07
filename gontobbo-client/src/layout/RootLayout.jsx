import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import TopNav from "../pages/shared/Navbar/TopNav";

const RootLayout = () => {
  return (
    <>
      <div className="">
        <TopNav />
      </div>
      <div className="backdrop-blur-md bg-gradient-to-r from-sky-200/30 via-purple-100/90 to-cyan-100/70 shadow-sm sticky top-0 z-30 py-2 border-b border-gray-300">
        <Navbar />
      </div>

      <div className="min-h-[70vh] max-w-7xl mx-auto">
        <Outlet />
      </div>

      <div className="bg bg-zinc-950">
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
