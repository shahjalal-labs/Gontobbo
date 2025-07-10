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
      <Link to="/dashboard">Dashboard</Link>
    </li>
    <li>
      <Link to="/chatbot">Ai Chatbot</Link>
    </li>
  </>
);
