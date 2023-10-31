import AppAssets from "../../../util/assets";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="nav-wrapper">
            <div id="logo-wrapper">
                <img src={AppAssets.logo} alt="logo" />
            </div>
            <nav>
                <a href="#header-section" className="hover-this">
                    <span className="nav-element standard-text">HOME</span>
                </a>
                <a href="#about-section" className="hover-this">
                    <span className="nav-element standard-text">ABOUT</span>
                </a>
                <a href="#project-section" className="hover-this">
                    <span className="nav-element standard-text">WORK</span>
                </a>
                <a href="#contact-section" className="hover-this">
                    <span className="nav-element standard-text">CONTACT</span>
                </a>
                <div className="cursor" />
            </nav>
        </div>
    );
};

export default Navbar;
