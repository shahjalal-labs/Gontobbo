import { navItems } from "./navbar.constant";
import NavbarStart from "./NavbarStart";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <NavbarStart />
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
