import ParaBlock from "../../../common/para-block";
import ProjectBanner from "../../../common/project-banner";
import Spacer from "../../../common/spacer";
// import AppAssets from "../../../util/assets";
import AppColors from "../../../util/colors";
import HelperFunctions from "../../../util/helper-functions";
import { projectList } from "../../../util/project-list";
// import AppStrings from "../../../util/strings";
import "./project-detail.css";

const ProjectDetail = (props) => {
    const projectIndex = props.index;
    const project = projectList[projectIndex];
    const isMobile = HelperFunctions.isMobile();

    function getElements(elementList) {
        const elements = [];
        elementList.forEach((ele, index) => {
            elements.push(
                <span key={"imapact-" + index}>
                    {ele}
                    <br />
                </span>
            );
        });
        return elements;
    }

    function getFirstFormat() {
        return (
            <div>
                <ParaBlock
                    headingClass={"intro-text"}
                    heading={"Overview"}
                    paragraph={project.overview}
                />
                <Spacer height={"8vh"} />
                <ParaBlock
                    headingClass={"intro-text"}
                    heading={"Problem"}
                    paragraph={project.problem}
                />
                <Spacer height={"8vh"} />
                <ParaBlock
                    headingClass={"intro-text"}
                    heading={"Solution"}
                    paragraph={project.solution}
                />
                <Spacer height={"8vh"} />
                <ParaBlock
                    headingClass={"intro-text"}
                    heading={"Impact"}
                    paragraph={getElements(project.impact)}
                />
                <Spacer height={"8vh"} />
                <p
                    className="para-text"
                    style={{
                        fontWeight: "700",
                        color: AppColors.goldColor,
                        fontStyle: "italic",
                    }}
                >
                    {project.nda}
                </p>
                <Spacer height={"8vh"} />
                <div id="demo-project-wrapper-row" className="inverted-row">
                    <div id="demo-project-1">
                        <img
                            className="demo-project-img"
                            src={projectList[projectIndex].demoImg1}
                            alt="demo-project-1"
                        />
                    </div>
                    {isMobile && <Spacer height={"3vh"} />}
                    <div id="demo-project-2">
                        <img
                            className="demo-project-img"
                            src={projectList[projectIndex].demoImg2}
                            alt="demo-project-1"
                        />
                    </div>
                </div>
            </div>
        );
    }

    function getSecondFormat() {
        return (
            <div>
                <div>
                    <p className="pf-font intro-text"> Introduction</p>
                    <Spacer height={"4vh"} />
                    <ParaBlock
                        headingClass={"small-intro-text"}
                        heading={"OVERVIEW"}
                        paragraph={project.overview}
                    />
                    <Spacer height={"8vh"} />
                    <ParaBlock
                        headingClass={"small-intro-text"}
                        heading={"PROBLEM STATEMENT"}
                        paragraph={project.problem}
                    />
                    <Spacer height={"8vh"} />
                    <ParaBlock
                        headingClass={"small-intro-text"}
                        heading={"GOAL"}
                        paragraph={project.goal}
                    />
                </div>
                <Spacer height={"8vh"} />
                <div>
                    <p className="pf-font intro-text"> Research</p>
                    <Spacer height={"4vh"} />
                    <ParaBlock
                        headingClass={"small-intro-text"}
                        heading={"USER INTERVIEW"}
                        paragraph={getElements(project.userInterview)}
                    />
                    <Spacer height={"4vh"} />
                    <ParaBlock
                        headingClass={"small-intro-text"}
                        heading={"UX DATA ANALYSIS"}
                        paragraph={project.uxDataAnalysis}
                    />
                    <Spacer height={"4vh"} />
                    <ParaBlock
                        headingClass={"small-intro-text"}
                        heading={"KEY FINDINGS & SOLUTIONS"}
                        paragraph={project.keyFindings}
                    />
                </div>
                <Spacer height={"8vh"} />
                <div>
                    <p className="pf-font intro-text"> Design</p>
                    <Spacer height={"4vh"} />
                    <div>
                        <img
                            className="demo-project-img"
                            src={projectList[projectIndex].demoImg1}
                            alt="demo-project-1"
                        />
                    </div>
                    <Spacer height={"3vh"} />
                    <div>
                        <img
                            className="demo-project-img"
                            src={projectList[projectIndex].demoImg2}
                            alt="demo-project-1"
                        />
                    </div>
                </div>
                <Spacer height={"8vh"} />
                <div>
                    <p className="pf-font intro-text"> Testing</p>
                    <Spacer height={"4vh"} />
                    <ParaBlock
                        headingClass={"small-intro-text"}
                        heading={"A/B TESTING"}
                        paragraph={project.abTesting}
                    />
                    <Spacer height={"4vh"} />
                    <ParaBlock
                        headingClass={"small-intro-text"}
                        heading={"HEATMAPS"}
                        paragraph={getElements(project.heatMaps)}
                    />
                </div>
                <Spacer height={"8vh"} />
                <div>
                    <p className="pf-font intro-text"> Conclusion</p>
                    <Spacer height={"4vh"} />

                    <ParaBlock
                        headingClass={"small-intro-text"}
                        heading={"IMPACT"}
                        paragraph={getElements(project.impact)}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="project-detail col">
            <ProjectBanner index={projectIndex} />
            <Spacer height={"8vh"} />
            {project.formatType === 1 ? getFirstFormat() : getSecondFormat()}
        </div>
    );
};

export default ProjectDetail;
