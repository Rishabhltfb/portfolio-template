import "./header.css";
import Spacer from "../../../common/spacer";
import heroIllustration from "../../../assets/illustrations/hero.png";
import CustomBttn from "../../../common/button";

const HeaderSection = () => {
    return (
        <div id="header-section" className="section">
            <div id="header-content-wrapper">
                <div id="header-content-wrap-1" className="col">
                    <span className="hero-heading">Hi, I'm Deeva Gupta</span>
                    <span className="hero-heading">UI/UX Designer! 👋🏼</span>
                    <Spacer height="3vh" />
                    <span className="body-text-1">
                        I utilize my user research skills to understand people's
                        behaviors and use that to deliver impactful solutions.
                    </span>
                    <Spacer height="4vh" />
                    <CustomBttn
                        text={"Click Here for Resume"}
                        color={"rgba(76, 112, 71, 1)"}
                        onClick={() => {
                            console.log("Bttn Clicked");
                        }}
                    />
                </div>
                <Spacer width={"10%"} />
                <div id="header-content-wrap-2">
                    <img
                        id="hero-illustration"
                        src={heroIllustration}
                        alt="hero-illustration"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;
