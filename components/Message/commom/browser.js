const browser = {
    browserVersion: function () {
        let browser = navigator.appName,
            b_version = navigator.appVersion;

        try {
            let version = b_version.split(";");
            let trim_Version = version[1].replace(/[ ]/g, "");

            return {
                IE7: browser == "Microsoft Internet Explorer" && trim_Version == "MSIE7.0",
                IE8: browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0",
                IE9: browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0",
            }
        }
        catch (e) {
            return false;
        }
    }()
};

export default browser;
