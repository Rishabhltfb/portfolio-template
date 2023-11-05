import "./project-component.css";
import HelperFunctions from "./../util/helper-functions";
import AppStrings from "../util/strings";

const ProjectComponent = (props) => {
    var wrapperStyle = {
        textAlign: "left",
        justifyContent: props.align,
        position: "relative",
        width: HelperFunctions.isMobile() ? "90%" : "40%",
    };
    return (
        <div
            // className="hover-this"
            onClick={() => props.onTap()}
            style={wrapperStyle}
        >
            <img src={props.img} alt="project img" />
            <div className="project-tint">
                <div className="project-view-circle">
                    <p className="small-text">{AppStrings.viewString}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectComponent;
