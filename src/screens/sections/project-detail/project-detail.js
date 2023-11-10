import ParaBlock from "../../../common/para-block";
import ProjectBanner from "../../../common/project-banner";
import Spacer from "../../../common/spacer";
import AppColors from "../../../util/colors";
import HelperFunctions from "../../../util/helper-functions";
import { projectList } from "../../../util/project-list";
import AppStrings from "../../../util/strings";
import "./project-detail.css";

const ProjectDetail = (props) => {
    const projectIndex = props.index;
    const project = projectList[projectIndex];
    const isMobile = HelperFunctions.isMobile();

    function getImpact() {
        const elements = [];
        project.impact.forEach((impact, index) => {
            elements.push(
                <div key={`impact-${index}`}>
                    {impact}
                    <br />
                </div>
            );
        });
        return elements;
    }

    return (
        <div className="project-detail col">
            <ProjectBanner index={projectIndex} />
            <Spacer height={"8vh"} />
            <ParaBlock heading={"Overview"} paragraph={project.overview} />
            <Spacer height={"8vh"} />
            <ParaBlock heading={"Problem"} paragraph={project.problem} />
            <Spacer height={"8vh"} />
            <ParaBlock heading={"Solution"} paragraph={project.solution} />
            <Spacer height={"8vh"} />
            <ParaBlock heading={"Impact"} paragraph={getImpact()} />
            <Spacer height={"8vh"} />
            <p
                className="para-text"
                style={{
                    fontWeight: "700",
                    color: AppColors.goldColor,
                    fontStyle: "italic",
                }}
            >
                {AppStrings.ndaText}
            </p>
            <div className="invert-row">
                <div></div>
            </div>
        </div>
    );
};

export default ProjectDetail;
