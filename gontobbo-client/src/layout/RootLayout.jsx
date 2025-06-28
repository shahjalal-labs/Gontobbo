import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="min-h-[70vh]">
          <Outlet />
        </div>
      </div>

      <div className="bg bg-zinc-950">
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
