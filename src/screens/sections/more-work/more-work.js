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
        navigate(AppRoutes.ProjectScreenRoute);
    }

    function getNextProjectsIndex(currIndex) {
        // TODO: function to get next 2 indexes
        const lastIndex = projectList.length - 1;
        const nextIndexes = [];
        let i = currIndex + 1;
        while (true) {
            if (nextIndexes.length == 2) break;
            if (i <= lastIndex && i != currIndex) {
                nextIndexes.push(i);
            }
            i += 1;
            if (i > lastIndex) {
                i = 0;
            }
        }
        return nextIndexes;
    }

    function getMoreWork() {
        const elements = [];
        const nextIndexes = getNextProjectsIndex(currIndex); // will always have 2 indexes
        elements.push(
            <div key={`more-work-${currIndex}`} className="col">
                <div className="inverted-row">
                    <ProjectComponent
                        heading={projectList[nextIndexes[0]].title}
                        description={projectList[nextIndexes[0]].description}
                        img={projectList[nextIndexes[0]].img}
                        onTap={() => navigateToProject(nextIndexes[0])}
                    />
                    {isMobile ? (
                        <Spacer height={"5vw"} />
                    ) : (
                        <Spacer width={"2vw"} />
                    )}
                    <ProjectComponent
                        heading={projectList[nextIndexes[1]].title}
                        description={projectList[nextIndexes[1]].description}
                        img={projectList[nextIndexes[1]].img}
                        onTap={() => navigateToProject(nextIndexes[1])}
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
