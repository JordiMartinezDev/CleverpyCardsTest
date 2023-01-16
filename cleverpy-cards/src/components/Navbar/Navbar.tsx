import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Nabvar() {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/login"> Login </Link>
        </li>
      </ul>
    </nav>
  );
}
