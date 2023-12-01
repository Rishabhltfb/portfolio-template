import { useEffect } from "react";
import AppAssets from "../../../util/assets";
import AppConstants from "../../../util/constants";
import Spacer from "./../../../common/spacer";
import HelperFunctions from "./../../../util/helper-functions";
import CircleIcon from "./../../../common/circle-icon";
import "./navbar.css";

const Navbar = () => {
    // Hamburger Logic here
    useEffect(() => {
        // define all elements that are part of mobile navbar
        const hamburger = document.querySelector("#hamburger");
        const navMenu = document.querySelector("#navbar-items");
        const sidebar = document.querySelector("#mobile-nav");
        const body = document.querySelector("#body");
        const navLink = document.querySelectorAll(".nav-link");

        // listeners to open and close mobile navbar
        hamburger.addEventListener("click", toggleMobileSideMenu);
        navLink?.forEach((n) => n.addEventListener("click", closeMenu));

        function toggleMobileSideMenu() {
            hamburger.classList.toggle("active");
            sidebar.classList.toggle("active");
            body.classList.toggle("scroll-lock");
            navMenu?.classList.toggle("hide");
        }

        function closeMenu() {
            hamburger.classList.remove("active");
            sidebar.classList.remove("active");
            body.classList.remove("scroll-lock");
            navMenu?.classList.remove("hide");
        }
        return () => {
            hamburger.removeEventListener("click", toggleMobileSideMenu);
            navLink?.forEach((n) => n.removeEventListener("click", closeMenu));
        };
    }, []);

    function getDesktopNavbar() {
        return (
            <nav className="hover-container">
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
        );
    }

    return (
        <div className="nav-wrapper">
            <a href="#header-section">
                <div id="logo-wrapper">
                    <img
                        className="hover-this"
                        src={AppAssets.logo}
                        alt="logo"
                    />
                </div>
            </a>
            {getDesktopNavbar()}
            <div id="mobile-nav">
                <div id="sidebar-wrapper" className="col">
                    <div className="col link-wrapper">
                        <a href="#header-section" className="nav-link">
                            <span className="nav-element intro-text">HOME</span>
                        </a>
                        <a href="#about-section" className="nav-link">
                            <span className="nav-element intro-text">
                                ABOUT
                            </span>
                        </a>
                        <a href="#project-section" className="nav-link">
                            <span className="nav-element intro-text">WORK</span>
                        </a>
                        <a href="#contact-section" className="nav-link">
                            <span className="nav-element intro-text">
                                CONTACT
                            </span>
                        </a>
                    </div>

                    <div className="row sidebar-icon-row">
                        <CircleIcon
                            lightIcon={AppAssets.instaIcon}
                            darkIcon={AppAssets.instaDarkIcon}
                            alt={"insta icon"}
                            onTap={() =>
                                HelperFunctions.openUrl(AppConstants.instaLink)
                            }
                        />
                        <Spacer width="3vw" />
                        <CircleIcon
                            lightIcon={AppAssets.linkedinIcon}
                            darkIcon={AppAssets.linkedinDarkIcon}
                            alt={"linkedin icon"}
                            onTap={() =>
                                HelperFunctions.openUrl(
                                    AppConstants.linkedinLink
                                )
                            }
                        />
                        <Spacer width="3vw" />
                        <CircleIcon
                            lightIcon={AppAssets.behanceIcon}
                            darkIcon={AppAssets.behanceDarkIcon}
                            alt={"behance icon"}
                            onTap={() =>
                                HelperFunctions.openUrl(
                                    AppConstants.behanceLink
                                )
                            }
                        />
                    </div>
                    <Spacer height={"10vh"} />
                </div>
            </div>
            <div id="hamburger">
                <div id="bar-1" className="bar" />
                <div id="bar-2" className="bar" />
                <div id="bar-3" className="bar" />
            </div>
        </div>
    );
};

export default Navbar;
