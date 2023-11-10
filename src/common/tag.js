import AppColors from "../util/colors";
import Spacer from "./spacer";

const Tag = (props) => {
    const primaryText = props.primaryText;
    const secondaryText = props.secondaryText;
    var wrapperStyle = {
        textAlign: "left",
        alignItems: "flex-start",
    };
    var primaryTextStyle = {
        color: AppColors.greyColor,
    };
    return (
        <div className="col" style={wrapperStyle}>
            <p className="standard-text" style={primaryTextStyle}>
                {primaryText}
            </p>
            <Spacer height={"8px"} />
            <p className="small-text">{secondaryText}</p>
        </div>
    );
};

export default Tag;
