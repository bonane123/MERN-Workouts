import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>Workout Buddy</h2>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
