const SkillTag = (props) => {
    var spacerStyle = {
        backgroundColor: props.bgColor ?? "transparent",
        color: props.color,
    };
    return (
        <div className="tag" style={spacerStyle}>
            <p className="tag-text">{props.text}</p>
        </div>
    );
};

export default SkillTag;
