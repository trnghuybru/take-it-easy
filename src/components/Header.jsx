import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import MainButton from "./MainButton";
function Header() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 flex items-center justify-between px-24
     py-4 bg-background backdrop-blur-sm z-50"
    >
      <div className="flex items-center">
        <Logo />
      </div>
      <div className="flex ml-auto space-x-8">
        <a href="#pricing" className="text-gray-normal hover:text-gray-main">
          Pricing{" "}
        </a>
        <a href="#about-us" className="text-gray-normal hover:text-gray-main">
          About us{" "}
        </a>
        <NavLink
          to={"/login"}
          className="text-gray-normal hover:text-gray-main"
        >
          Login
        </NavLink>
      </div>
      <Link to="/login">
        <div className="ml-8">
          <MainButton>Get Started</MainButton>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
