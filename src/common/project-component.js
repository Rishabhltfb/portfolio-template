const ProjectComponent = (props) => {
    var wrapperStyle = {
        textAlign: "left",
        justifyContent: props.align,
        width: "40%",
    };
    return (
        <div style={wrapperStyle}>
            <img src={props.img} alt="project img" />
        </div>
    );
};

export default ProjectComponent;
