import CustomBttn from "../../../common/button";
import Spacer from "../../../common/spacer";
import "./contact.css";
import AppStrings from "./../../../util/strings";
import SectionHeading from "./../../../common/section-heading";
import AppColors from "../../../util/colors";
import AppAssets from "../../../util/assets";
import CircleIcon from "../../../common/circle-icon";
import HelperFunctions from "../../../util/helper-functions";
import AppConstants from "../../../util/constants";

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
                    <CustomBttn
                        text={AppStrings.callCtaString}
                        hoverBgColor={AppColors.goldColor}
                        hoverTextColor={AppColors.black}
                        color={AppColors.white}
                        onClick={() =>
                            HelperFunctions.openUrl(
                                `tel:${AppConstants.phoneNumber}`
                            )
                        }
                    />
                    <Spacer width="5vh" />
                    <CustomBttn
                        bgColor={AppColors.goldColor}
                        color={"#000"}
                        hoverBgColor={AppColors.white}
                        hoverTextColor={AppColors.black}
                        text={AppStrings.messageCtaString}
                        onClick={() =>
                            HelperFunctions.openUrl(
                                `mailto:${AppConstants.email}?subject=Subject&body=message%20goes%20here`
                            )
                        }
                    />
                </div>
                <Spacer height={"8vh"} />
                <div className="row">
                    <CircleIcon
                        lightIcon={AppAssets.instaIcon}
                        darkIcon={AppAssets.instaDarkIcon}
                        alt={"insta icon"}
                        onTap={() =>
                            HelperFunctions.openUrl(AppConstants.instaLink)
                        }
                    />
                    <Spacer width="3vw" />
                    <CircleIcon
                        lightIcon={AppAssets.linkedinIcon}
                        darkIcon={AppAssets.linkedinDarkIcon}
                        alt={"linkedin icon"}
                        onTap={() =>
                            HelperFunctions.openUrl(AppConstants.linkedinLink)
                        }
                    />
                    <Spacer width="3vw" />
                    <CircleIcon
                        lightIcon={AppAssets.behanceIcon}
                        darkIcon={AppAssets.behanceDarkIcon}
                        alt={"behance icon"}
                        onTap={() =>
                            HelperFunctions.openUrl(AppConstants.behanceLink)
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
