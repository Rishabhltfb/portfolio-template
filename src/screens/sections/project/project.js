import { useNavigate } from "react-router-dom";
import CustomBttn from "../../../common/button";
import ProjectComponent from "../../../common/project-component";
import SectionHeading from "../../../common/section-heading";
import Spacer from "../../../common/spacer";
import HelperFunctions from "../../../util/helper-functions";
import { projectList } from "../../../util/project-list";
import AppStrings from "../../../util/strings";
import "./project.css";
import AppRoutes from "../../../util/navigator";
import AppConstants from "../../../util/constants";
import AppColors from "../../../util/colors";

const ProjectSection = () => {
    const isMobile = HelperFunctions.isMobile();
    const navigate = useNavigate();

    function navigateToProject(index) {
        localStorage.setItem(AppStrings.projectIndexKey, index);
        navigate(AppRoutes.ProjectScreenRoute);
    }

    function getProjects() {
        const elements = [];
        for (let i = 0; i < projectList.length; i += 2) {
            elements.push(
                <div key={`project-${i}`} className="col">
                    <div className="inverted-row">
                        <ProjectComponent
                            heading={projectList[i].title}
                            description={projectList[i].description}
                            img={projectList[i].img}
                            onTap={() => navigateToProject(i)}
                        />
                        {isMobile ? (
                            <Spacer height={"5vw"} />
                        ) : (
                            <Spacer width={"2vw"} />
                        )}
                        <ProjectComponent
                            heading={projectList[i + 1].title}
                            description={projectList[i + 1].description}
                            img={projectList[i + 1].img}
                            onTap={() => navigateToProject(i + 1)}
                        />
                    </div>
                    <Spacer height={isMobile ? "5vw" : "2vw"} />
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
                    onTap={() => navigateToProject(lastIndex)}
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
                hoverBgColor={AppColors.goldColor}
                hoverTextColor={AppColors.black}
                color={AppColors.white}
                onClick={() => {
                    HelperFunctions.openUrl(AppConstants.instaLink);
                }}
            />
        </div>
    );
};

export default ProjectSection;
