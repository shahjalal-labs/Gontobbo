import { Link } from "react-router";
import BrandLogo from "../BrandLogo/BrandLogo";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal   max-xl:px-4 sm:py-28  text-zinc-300  max-w-7xl mx-auto">
      <aside>
        <BrandLogo />
        <p>Providing reliable courier services</p>
      </aside>

      <nav>
        <h6 className="footer-title">Services</h6>
        <Link to="/branding" className="link link-hover">
          Branding
        </Link>
        <Link to="/design" className="link link-hover">
          Design
        </Link>
        <Link to="/marketing" className="link link-hover">
          Marketing
        </Link>
        <Link to="/advertisement" className="link link-hover">
          Advertisement
        </Link>
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <Link to="/jobs" className="link link-hover">
          Jobs
        </Link>
        <Link to="/press-kit" className="link link-hover">
          Press kit
        </Link>
      </nav>

      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link to="/terms" className="link link-hover">
          Terms of use
        </Link>
        <Link to="/privacy" className="link link-hover">
          Privacy policy
        </Link>
        <Link to="/cookies" className="link link-hover">
          Cookie policy
        </Link>
        <Link
          to="https://github.com/shahjalal-labs/Gontobbo/tree/main/gontobbo-client"
          className="link link-hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
