import { useNavigate } from "react-router-dom";
import "../project/project.css";
import "./more-work.css";
import ProjectComponent from "../../../common/project-component";
import Spacer from "../../../common/spacer";
import SectionHeading from "../../../common/section-heading";
import CustomBttn from "../../../common/button";
import { projectList } from "../../../util/project-list";
import HelperFunctions from "../../../util/helper-functions";
import AppRoutes from "../../../util/navigator";
import AppStrings from "../../../util/strings";
import AppConstants from "../../../util/constants";

const MoreWorkSection = (props) => {
    const isMobile = HelperFunctions.isMobile();
    const navigate = useNavigate();
    const currIndex = props.index;

    function navigateToProject(index) {
        localStorage.setItem(AppStrings.projectIndexKey, index);
        navigate(AppRoutes.ProjectScreenRoute);
    }

    function getMoreWork() {
        const elements = [];
        const projectLength = projectList.length;
        const firstIndex = (currIndex + 1) % projectLength;
        const secondIndex = (currIndex + 2) % projectLength;
        elements.push(
            <div key={`more-work-${currIndex}`} className="col">
                <div className="inverted-row">
                    <ProjectComponent
                        heading={projectList[firstIndex].title}
                        description={projectList[firstIndex].description}
                        img={projectList[firstIndex].img}
                        onTap={() => navigateToProject(firstIndex)}
                    />
                    {isMobile ? (
                        <Spacer height={"5vw"} />
                    ) : (
                        <Spacer width={"2vw"} />
                    )}
                    <ProjectComponent
                        heading={projectList[secondIndex].title}
                        description={projectList[secondIndex].description}
                        img={projectList[secondIndex].img}
                        onTap={() => navigateToProject(secondIndex)}
                    />
                </div>
            </div>
        );

        return elements;
    }
    return (
        <div id="more-work-section" className="section col">
            <SectionHeading
                preHeaderText={AppStrings.projectString}
                headerText={AppStrings.moreWorkString}
            />
            <Spacer height={"5vh"} />
            <div className="col">{getMoreWork()}</div>
            <Spacer height={"5vh"} />
            <CustomBttn
                text={AppStrings.moreWorkString}
                onClick={() => {
                    HelperFunctions.openUrl(AppConstants.instaLink);
                }}
            />
        </div>
    );
};

export default MoreWorkSection;
