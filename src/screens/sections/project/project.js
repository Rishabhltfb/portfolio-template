import CustomBttn from "../../../common/button";
import ProjectComponent from "../../../common/project-component";
import SectionHeading from "../../../common/section-heading";
import Spacer from "../../../common/spacer";
import { projectList } from "../../../util/project-list";
import AppStrings from "../../../util/strings";
import "./project.css";

const ProjectSection = () => {
    function getProjects() {
        const elements = [];
        for (let i = 0; i < projectList.length; i += 2) {
            elements.push(
                <div className="col">
                    <div className="row">
                        <ProjectComponent
                            heading={projectList[i].title}
                            description={projectList[i].description}
                            img={projectList[i].img}
                        />
                        <Spacer width={"2vw"} />
                        <ProjectComponent
                            heading={projectList[i + 1].title}
                            description={projectList[i + 1].description}
                            img={projectList[i + 1].img}
                        />
                    </div>
                    <Spacer height={"2vw"} />
                </div>
            );
        }
        if (elements.length < projectList.length) {
            const lastIndex = projectList.length - 1;
            <div className="row project-row">
                <ProjectComponent
                    heading={projectList[lastIndex].title}
                    description={projectList[lastIndex].description}
                    img={projectList[lastIndex].img}
                />
            </div>;
        }
        return elements;
    }
    return (
        <div id="project-section" className="section col">
            <SectionHeading
                preHeaderText={AppStrings.portfolioString}
                headerText={AppStrings.workHeadingString}
            />
            <div className="col" id="projects-col">
                {getProjects()}
            </div>
            <CustomBttn
                text={AppStrings.moreWorkString}
                onClick={() => {
                    console.log("Bttn Clicked");
                }}
            />
        </div>
    );
};

export default ProjectSection;
