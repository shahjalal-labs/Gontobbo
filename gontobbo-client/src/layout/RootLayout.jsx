import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import TopNav from "../pages/shared/Navbar/TopNav";

const RootLayout = () => {
  return (
    <>
      <TopNav />
      <Navbar />

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
