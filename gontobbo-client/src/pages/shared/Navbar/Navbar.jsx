import { Link } from "react-router";
import { navItems } from "./navbar.constant";
import NavbarStart from "./NavbarStart";

const Navbar = () => {
  return (
    <>
      <div className="navbar backdrop-blur-md bg-gradient-to-r from-sky-200/30 via-purple-100/90 to-cyan-100/70 shadow-sm sticky top-0 z-30 py-4 border-b border-gray-300">
        <NavbarStart />
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <Link
            className="btn btn-info btn-soft rounded-full"
            to="/auth/signin"
          >
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
