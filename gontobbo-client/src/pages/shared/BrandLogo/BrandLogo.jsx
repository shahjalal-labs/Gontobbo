import { Link } from "react-router";
import { logo } from "../../../assets/images";

const BrandLogo = () => {
  return (
    <div className="flex items-center">
      <img width={30} src={logo} />
      <Link to="/" className="btn btn-ghost text-xl ml-[-13px]">
        Gontobbo
      </Link>
    </div>
  );
};

export default BrandLogo;
