const ProjectComponent = (props) => {
    var wrapperStyle = {
        textAlign: "left",
        justifyContent: props.align,
    };
    return (
        <div className="row" style={wrapperStyle}>
            <div
                className="col"
                style={{ width: "40%", alignItems: "flex-start" }}
            >
                <img src={props.img} alt="project img" />
                <p className="project-heading">{props.heading}</p>
                <p className="body-text-2">{props.description}</p>
            </div>
        </div>
    );
};

export default ProjectComponent;
