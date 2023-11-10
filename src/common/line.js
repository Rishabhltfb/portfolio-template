const CustomLine = (props) => {
    const color = props.color;
    const height = props.height;
    const width = props.width;

    var lineStyle = {
        height: height ?? "1px",
        width: width ?? "100%",
        background: color ?? "white",
    };
    return <div style={lineStyle} />;
};

export default CustomLine;
