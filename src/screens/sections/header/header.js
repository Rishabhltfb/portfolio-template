import "./header.css";
import Spacer from "../../../common/spacer";
// import heroIllustration from "../../../assets/illustrations/hero.png";
import CustomBttn from "../../../common/button";
import AppStrings from "../../../util/strings";
import AppAssets from "../../../util/assets";

const HeaderSection = () => {
    return (
        <div id="header-section" className="section">
            <div id="header-content-wrapper">
                <div id="header-content-wrap-1" className="col">
                    <span className="intro-text">{AppStrings.nameString}</span>
                    <span className="hero-text">
                        {AppStrings.professionString}
                    </span>
                    <Spacer height="3vh" />

                    <Spacer height="4vh" />
                    <CustomBttn
                        text={AppStrings.aboutMeString}
                        onClick={() => {
                            var ele = document.getElementById("about-section");
                            window.scrollTo(ele.offsetLeft, ele.offsetTop);
                        }}
                    />
                </div>

                <div id="header-content-wrap-2" className="col">
                    <img
                        id="hero-illustration"
                        src={AppAssets.heroIllustration}
                        alt="hero-illustration"
                    />
                </div>
                <div id="header-content-wrap-3" className="col">
                    <div id="para-wrapper" className="col">
                        <img
                            src={AppAssets.flowerImg}
                            alt="hero-illustration"
                        />
                        <p className="para-text" id="passion-string">
                            {AppStrings.passionString}
                        </p>
                        <Spacer height={"10vh"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;
