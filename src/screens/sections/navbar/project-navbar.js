import BackButton from "../../../common/back-button";
import AppAssets from "../../../util/assets";
import "./navbar.css";

const ProjectNavbar = () => {
    return (
        <div className="nav-wrapper">
            <BackButton />
            <div id="logo-wrapper">
                <img href="/" src={AppAssets.logo} alt="logo" />
            </div>
        </div>
    );
};

export default ProjectNavbar;
