import Spacer from "../../../common/spacer";
import "./about.css";
import aboutIllustration from "../../../assets/illustrations/about.png";
import SectionHeading from "../../../common/section-heading";
import AppStrings from "./../../../util/strings";
import CustomBttn from "../../../common/button";
import AppAssets from "../../../util/assets";
import DetailRow from "../../../common/detail-row";
import HelperFunctions from "../../../util/helper-functions";
import AppConstants from "../../../util/constants";
import AppColors from "../../../util/colors";

const AboutSection = () => {
    const isMobile = HelperFunctions.isMobile();
    return (
        <div id="about-section" className="section col">
            <SectionHeading
                headerText={AppStrings.aboutMeString}
                preHeaderText={AppStrings.resumeString}
            />
            <div className="inverted-row" id="about-section-wrap">
                <div className="col" id="about-content-wrap">
                    <p className="para-text" id="uiux-header">
                        {AppStrings.uiuxString}
                    </p>
                    <br />
                    <p className="standard-text" id="intro-text">
                        {AppStrings.introString}
                    </p>
                    <br />
                    <br />
                    <DetailRow
                        field={"Experience"}
                        value={AppStrings.experienceString}
                    />
                    <DetailRow field={"Phone"} value={AppStrings.phoneString} />
                    <DetailRow field={"Email"} value={AppStrings.emailString} />
                    <DetailRow
                        field={"Instagram"}
                        value={AppStrings.instaString}
                    />
                    <DetailRow
                        field={"Linkedin"}
                        value={AppStrings.linkedinString}
                    />
                    <DetailRow
                        field={"Behance"}
                        value={AppStrings.behanceString}
                    />
                </div>
                {isMobile && <Spacer height={"5vh"} />}
                <div id="about-illustration-wrap">
                    <img
                        src={AppAssets.aboutIllustration}
                        alt="about-illustration"
                    />
                </div>
            </div>
            <CustomBttn
                text={AppStrings.viewResumeString}
                hoverBgColor={AppColors.goldColor}
                hoverTextColor={AppColors.black}
                color={AppColors.white}
                onClick={() => {
                    HelperFunctions.openUrl(AppConstants.resumeLink);
                }}
            />
        </div>
    );
};

export default AboutSection;
