import AppColors from "./../util/colors";
import Spacer from "./spacer";

const DetailRow = (props) => {
    var rowStyle = {
        justifyContent: "flex-start",
    };
    var wrapperStyle = {
        padding: "0.5vh",
        justifyContent: "space-between",
        width: "25%",
    };
    var fieldStyle = {
        padding: "0.5vh",
        justifyContent: "space-between",
        color: AppColors.greyColor,
    };
    var valueStyle = {
        fontWeight: "600",
    };
    return (
        <div className="row" style={rowStyle}>
            <div className="row" style={wrapperStyle}>
                <p className="standard-text" style={fieldStyle}>
                    {props.field}
                </p>
                <p className="standard-text" style={fieldStyle}>
                    {" "}
                    :
                </p>
            </div>
            <Spacer width={"3vw"} />
            <p className="standard-text" style={valueStyle}>
                {props.value}
            </p>
        </div>
    );
};

export default DetailRow;
