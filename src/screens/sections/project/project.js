import ProjectComponent from "../../../common/project-component";
import Spacer from "../../../common/spacer";
import { projectList } from "../../../util/project-list";
import "./project.css";

const ProjectSection = () => {
    function getProjects() {
        const elements = [];
        for (let i = 0; i < projectList.length; i += 1) {
            elements.push(
                <ProjectComponent
                    heading={projectList[i].title}
                    description={projectList[i].description}
                    img={projectList[i].img}
                    align={i % 2 === 0 ? "left" : "right"}
                />
            );
        }
        return elements;
    }
    return (
        <div id="project-section" className="section">
            <div className="row" style={{ justifyContent: "left" }}>
                <Spacer
                    height="5px"
                    width="20%"
                    bg={"rgba(76, 112, 71, 0.4)"}
                />
                <span className="heading">Projects</span>
            </div>
            {getProjects()}
        </div>
    );
};

export default ProjectSection;
