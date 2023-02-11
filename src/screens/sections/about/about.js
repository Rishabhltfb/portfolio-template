import Spacer from "../../../common/spacer";
import "./about.css";
import aboutIllustration from "../../../assets/illustrations/about.png";

const AboutSection = () => {
    return (
        <div id="about-section" className="section">
            <div id="about-content-wrapper">
                <div id="about-content-wrap-1" className="col">
                    <div id="about-illustration-wrap">
                        <img
                            id="about-illustration"
                            src={aboutIllustration}
                            alt="about-illustration"
                        />
                    </div>
                </div>
                <Spacer width={"5%"} />
                <div id="about-content-wrap-2" className="col">
                    <span className="dancing-text">Who am I?</span>
                    <div className="row" style={{ justifyContent: "left" }}>
                        <span className="heading">About me</span>
                        <Spacer
                            height="2px"
                            width="30%"
                            bg={"rgba(76, 112, 71, 0.4)"}
                        />
                    </div>
                    <br />
                    <br />
                    <p className="body-text-1">
                        As a UI/UX designer, my passion lies in creating
                        seamless, intuitive, and visually appealing digital
                        experiences for users. My portfolio showcases a diverse
                        range of projects that demonstrate my ability to
                        understand and design for different user needs, as well
                        as my proficiency in various design tools and
                        methodologies.
                    </p>
                    <br />
                    <p className="body-text-1">
                        From conducting user research and creating wireframes,
                        to prototyping and testing, I take a user-centered
                        approach to design that focuses on solving problems and
                        providing value to the end-user.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
