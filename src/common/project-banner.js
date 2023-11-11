import AppColors from "../util/colors";
import { projectList } from "../util/project-list";
import CustomLine from "./line";
import Spacer from "./spacer";
import Tag from "./tag";

const ProjectBanner = (props) => {
    const index = props.index;
    const project = projectList[index];
    var wrapperStyle = {
        textAlign: "left",
        width: "100%",
    };
    var headingStyle = {
        fontWeight: "600",
    };
    var paraStyle = {
        fontWeight: "400",
        color: AppColors.greyColor,
    };
    return (
        <div style={wrapperStyle}>
            <div className="banner-wrapper">
                <img
                    src={project.bannerImg}
                    alt={`${project.title}-banner-img`}
                />
            </div>
            <Spacer height={"5vh"} />
            <p className="header-text" style={headingStyle}>
                {project.title}
            </p>
            <Spacer height={"5vh"} />
            <CustomLine
                height={"2px"}
                width={"100%"}
                color={"rgba(51,51,55,1)"}
            />
            <br />
            <div className="inverted-row">
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
