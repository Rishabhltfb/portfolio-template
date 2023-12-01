import AppAssets from "../util/assets";
import AppColors from "../util/colors";
import HelperFunctions from "../util/helper-functions";
import { projectList } from "../util/project-list";
import CustomLine from "./line";
import Spacer from "./spacer";
import Tag from "./tag";

const ProjectBanner = (props) => {
    const index = props.index;
    const project = projectList[index];
    const isMobile = HelperFunctions.isMobile();
    var wrapperStyle = {
        textAlign: "left",
        width: "100%",
    };
    var headingStyle = {
        fontWeight: "600",
    };
    var tagWrapper = {
        height: "30vh",
        justifyContent: "space-evenly",
    };
    return (
        <div style={wrapperStyle}>
            <div className="banner-wrapper">
                <img
                    src={isMobile ? project.mobileBanner : project.bannerImg}
                    alt={`${project.title}-banner-img`}
                />
            </div>
            <Spacer height={"5vh"} />
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <p
                    onClick={() => HelperFunctions.openUrl(project.projectLink)}
                    className="header-text hover-this"
                    style={headingStyle}
                >
                    {project.title}
                </p>
                <Spacer width={"10px"} />
                <img
                    className="hover-this"
                    onClick={() => HelperFunctions.openUrl(project.projectLink)}
                    src={AppAssets.linkIcon}
                />
            </div>
            <Spacer height={"5vh"} />
            <CustomLine
                height={"2px"}
                width={"100%"}
                color={"rgba(51,51,55,1)"}
            />
            <br />
            <div style={isMobile ? tagWrapper : {}} className="inverted-row">
                <Tag primaryText={"Domain"} secondaryText={project.domain} />
                <Tag primaryText={"Role"} secondaryText={project.role} />
                <Tag
                    primaryText={"Category"}
                    secondaryText={project.category}
                />
                <Tag
                    primaryText={"Tools Used"}
                    secondaryText={project.toolsUsed}
                />
            </div>
            <br />
            <CustomLine
                height={"2px"}
                width={"100%"}
                color={"rgba(51,51,55,1)"}
            />
        </div>
    );
};

export default ProjectBanner;
