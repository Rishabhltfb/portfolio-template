import CustomBttn from "../../../common/button";
import Spacer from "../../../common/spacer";
import "./contact.css";
import instaIcon from "../../../assets/icons/insta.png";
import behanceIcon from "../../../assets/icons/behance.png";
import linkedinIcon from "../../../assets/icons/linkedin.png";
import AppStrings from "./../../../util/strings";
import SectionHeading from "./../../../common/section-heading";
import AppColors from "../../../util/colors";

const ContactSection = () => {
    return (
        <div id="contact-section" className="section">
            <div id="contact-col">
                <SectionHeading
                    preHeaderText={AppStrings.contactString}
                    headerText={AppStrings.talkString}
                />
                <Spacer height={"4vh"} />
                <div id="contact-body-wrap">
                    <p className="para-text" id="footer-description-text">
                        {AppStrings.footerDescriptionString}
                    </p>
                </div>
                <Spacer height={"4vh"} />
                <div className="row">
                    <CustomBttn text={AppStrings.callCtaString} />
                    <Spacer width="5vh" />
                    <CustomBttn
                        bgColor={AppColors.goldColor}
                        color={"#000"}
                        text={AppStrings.messageCtaString}
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
