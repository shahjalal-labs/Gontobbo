import { Link } from "react-router";

export const navItems = (
  <>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/gontobbo-zones">Gontobbo Zones</Link>
    </li>
    <li>
      <Link to="/send-parcel">Send Parcel</Link>
    </li>
    <li>
      <Link to="/dashboard/my-parcel">My Parcels</Link>
    </li>
    <li>
      <Link to="/be-rider">Be a Rider</Link>
    </li>
    <li>
      <Link to="/chatbot">Ai Chatbot</Link>
    </li>
  </>
);
