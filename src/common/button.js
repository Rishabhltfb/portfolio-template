const CustomBttn = (props) => {
    var spacerStyle = {
        backgroundColor: props.bgColor ?? "transparent",
        color: props.color ?? undefined,
    };
    return (
        <div onClick={props.onClick} className="bttn" style={spacerStyle}>
            <p className="bttn-text">{props.text}</p>
        </div>
    );
};

export default CustomBttn;
