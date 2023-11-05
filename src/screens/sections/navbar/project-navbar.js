import AppAssets from "../../../util/assets";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="nav-wrapper">
            <div id="logo-wrapper">
                <img href="/" src={AppAssets.logo} alt="logo" />
            </div>
            <nav className="hover-container">
                <a href="#header-section" className="hover-this">
                    <span className="nav-element standard-text hover-text">
                        HOME
                    </span>
                </a>
                <a href="#about-section" className="hover-this">
                    <span className="nav-element standard-text hover-text">
                        ABOUT
                    </span>
                </a>
                <a href="#project-section" className="hover-this">
                    <span className="nav-element standard-text hover-text">
                        WORK
                    </span>
                </a>
                <a href="#contact-section" className="hover-this">
                    <span className="nav-element standard-text hover-text">
                        CONTACT
                    </span>
                </a>
            </nav>
        </div>
    );
};

export default Navbar;
