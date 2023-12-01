import AppColors from "../util/colors";

const ParaBlock = (props) => {
    const heading = props.heading;
    const paragraph = props.paragraph;
    const headingClass = props.headingClass;
    var wrapperStyle = {
        textAlign: "left",
    };
    var headingStyle = {
        fontWeight: "600",
    };
    var paraStyle = {
        fontWeight: "400",
        color: AppColors.greyColor,
        alignSelf: "stretch",
    };
    return (
        <div key={"para-block-" + heading} style={wrapperStyle}>
            <p className={headingClass} style={headingStyle}>
                {heading}
            </p>
            <br />
            <p className="para-text" style={paraStyle}>
                {paragraph}
            </p>
        </div>
    );
};

export default ParaBlock;
