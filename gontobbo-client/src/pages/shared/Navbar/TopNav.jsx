import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const TopNav = () => {
  return (
    <div
      className="flex justify-between items-center py-1 px-2
      bg-gradient-to-r from-cyan-200/20 via-sky-200/20 via-blue-300/20 via-orange-400/20 to-purple-200/30  my-3 max-lg:hidden max-container"
    >
      <h1 className="text-cyan-700">Best Courier Services in the World </h1>
      <ul className="flex items-center gap-9">
        <li className="flex items-center gap-1">
          <Link>
            <span className="text-purple-500">📞</span>
          </Link>
          <p className="text-cyan-600">01540325659</p>
        </li>
        <li className="flex items-center gap-1">
          <Link>📧</Link>
          <p className="text-purple-900">gontobbo@gmail.com</p>
        </li>
        <ul className="flex items-center sm:gap-6 gap-2">
          <li>
            <Link>
              <span className="text-cyan-500 text-2xl">
                <FaFacebook />
              </span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="text-purple-500 text-2xl">
                <FaTwitter />
              </span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="text-sky-500 text-2xl">
                <FaYoutube />
              </span>
            </Link>
          </li>
          <li>
            <Link>
              <span className="text-sky-500 text-2xl">
                <FaInstagram />
              </span>
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default TopNav;
