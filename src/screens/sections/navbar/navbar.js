import "./navbar.css";
import logo from "../../../assets/icons/pin.png";

const Navbar = () => {
    return (
        <div className="nav-wrapper">
            <div id="logo-wrapper">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <a href="#header-section" className="hover-this">
                    <span className="nav-element">Home</span>
                </a>
                <a href="#about-section" className="hover-this">
                    <span className="nav-element">About</span>
                </a>
                <a href="#project-section" className="hover-this">
                    <span className="nav-element">Projects</span>
                </a>
                <a href="#contact-section" className="hover-this">
                    <span className="nav-element">Contact</span>
                </a>
                <div className="cursor" />
            </nav>
        </div>
    );
};

export default Navbar;
