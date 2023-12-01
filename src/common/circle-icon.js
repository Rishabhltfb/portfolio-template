import { useState } from "react";

const CircleIcon = (props) => {
    const [icon, updateIcon] = useState(props.lightIcon);
    function handleMouseEnter() {
        updateIcon(props.darkIcon);
    }

    function handleMouseLeave() {
        updateIcon(props.lightIcon);
    }

    return (
        <div
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => props.onTap()}
            className="circle"
        >
            <img className="contact-icon" src={icon} alt={props.alt} />
        </div>
    );
};

export default CircleIcon;
