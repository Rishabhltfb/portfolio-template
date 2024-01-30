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
import { useEffect, useState } from "react";

const ProjectSection = () => {
    const isMobile = HelperFunctions.isMobile();
    const navigate = useNavigate();
    const disableIndex = 3;

    function navigateToProject(index) {
        localStorage.setItem(AppStrings.projectIndexKey, index);
        navigate(AppRoutes.ProjectScreenRoute);
    }

    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        console.log("Test1");
        const handleScroll = (e) => {
            const scrollTop = e.target.scrollTop;
            console.log("Test2", e.target);
            setScrollPos(scrollTop);
        };
        const projectSection = document.getElementById("project-section");
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function getProjects() {
        const elements = [];
        for (let i = 0; i < projectList.length; i += 1) {
            {
                elements.push(
                    <div
                        key={`project-${i}`}
                        style={{
                            position: "absolute",
                            transform: `translateX(${scrollPos * i}px)`,
                        }}
                    >
                        <ProjectComponent
                            heading={projectList[i].title}
                            description={projectList[i].description}
                            img={projectList[i].img}
                            isDisable={disableIndex == i}
                            onTap={() => navigateToProject(i)}
                        />
                        <Spacer width={"2vw"} />
                    </div>
                );
            }
        }
        return (
            <div style={{ position: "relative" }} className="inverted-row">
                {elements}
            </div>
        );
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
