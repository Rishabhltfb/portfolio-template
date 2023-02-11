import CustomBttn from "../../../common/button";
import Spacer from "../../../common/spacer";
import "./contact.css";
import instaIcon from "../../../assets/icons/insta.png";
import behanceIcon from "../../../assets/icons/behance.png";
import linkedinIcon from "../../../assets/icons/linkedin.png";

const ContactSection = () => {
    return (
        <div id="contact-section" className="section">
            <div id="contact-col">
                <div className="row">
                    <span className="dancing-text">Schedule a Call</span>
                </div>
                <div id="contact-header-row">
                    <Spacer
                        height="2px"
                        width="30%"
                        bg={"rgba(76, 112, 71, 0.4)"}
                    />
                    <span className="heading">Let’s talk</span>
                    <Spacer
                        height="2px"
                        width="30%"
                        bg={"rgba(76, 112, 71, 0.4)"}
                    />
                </div>
                <Spacer height={"4vh"} />
                <div id="contact-body-wrap">
                    <span className="body-text-1">
                        I’m very approachable and would love to speak to you.
                        Feel free to call, send me an email .{" "}
                    </span>
                </div>
                <Spacer height={"4vh"} />
                <div className="row">
                    <CustomBttn text={"Call me"} />
                    <Spacer width="5vh" />
                    <CustomBttn
                        bgColor={"rgba(76, 112, 71, 1)"}
                        color={"white"}
                        text={"Send Message"}
                    />
                </div>
                <Spacer height={"8vh"} />
                <div className="row">
                    <img src={linkedinIcon} alt={"social icon"}></img>
                    <Spacer width="3vw" />
                    <img src={instaIcon} alt={"social icon"}></img>
                    <Spacer width="3vw" />
                    <img src={behanceIcon} alt={"social icon"}></img>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
