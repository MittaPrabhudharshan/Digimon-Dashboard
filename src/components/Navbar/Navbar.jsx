import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
      </div>
    </nav>
  );
}
