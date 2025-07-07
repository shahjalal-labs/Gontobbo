import { Link } from "react-router";
import { navItems } from "./navbar.constant";
import NavbarStart from "./NavbarStart";

const Navbar = () => {
  return (
    <>
      <div className="navbar  max-container">
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
