const Spacer = (props) => {
    var spacerStyle = {
        height: props.height,
        width: props.width,
        backgroundColor: props.bg ?? "transparent",
    };
    return <div style={spacerStyle}></div>;
};

export default Spacer;
