import AppColors from "./../util/colors";

const SectionHeading = (props) => {
    var preHeaderStyle = {
        color: AppColors.goldColor,
    };
    var headerStyle = {
        fontWeight: "600",
    };
    return (
        <div className="col">
            <p className="standard-text" style={preHeaderStyle}>
                {props.preHeaderText}
            </p>
            <p className="header-text" style={headerStyle}>
                {props.headerText}
            </p>
        </div>
    );
};

export default SectionHeading;
