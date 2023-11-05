export default class HelperFunctions {
    static isMobile = () => {
        return window.innerWidth < 600;
    };

    static openUrl(url) {
        window.open(url, "_blank");
    }
}
