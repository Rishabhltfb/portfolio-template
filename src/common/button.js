import { useEffect, useState } from "react";

const CustomBttn = (props) => {
    const [isHover, updateHover] = useState(false);
    const [bgColor, updateBgColor] = useState(props.bgColor ?? "transparent");
    const [textColor, updateTextColor] = useState(props.color ?? undefined);
    var spacerStyle = {
        backgroundColor: bgColor,
        color: textColor,
    };
    var textStyle = {
        color: textColor,
        fontWeight: isHover ? "bold" : undefined,
    };
    useEffect(() => {
        if (isHover) {
            updateBgColor(props.hoverBgColor);
            updateTextColor(props.hoverTextColor);
        } else {
            updateBgColor(props.bgColor ?? "transparent");
            updateTextColor(props.color ?? undefined);
        }
    }, [isHover]);

    function handleMouseEnter() {
        updateHover(true);
    }

    function handleMouseLeave() {
        updateHover(false);
    }

    return (
        <div
            onClick={() => props.onClick()}
            className="bttn hover-this"
            style={spacerStyle}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
        >
            <p className="bttn-text" style={textStyle}>
                {props.text}
            </p>
        </div>
    );
};

export default CustomBttn;
