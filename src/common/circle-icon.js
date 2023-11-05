const CircleIcon = (props) => {
    return (
        <div onClick={() => props.onTap()} className="circle">
            <img className="contact-icon" src={props.icon} alt={props.alt} />
        </div>
    );
};

export default CircleIcon;
