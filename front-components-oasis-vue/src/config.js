const isDebug = isDebug => {
    if (isDebug) {
        return {
            apiUrl:
                "https://api.profile.vermi-succotash.net/widgets/login-box/",
            domain: ".vermi-succotash.net"
        };
    } else {
        return {
            apiUrl: "https://api.profile.mars.games/widgets/login-box/",
            domain: ".mars.games"
        };
    }
};
export default isDebug;
