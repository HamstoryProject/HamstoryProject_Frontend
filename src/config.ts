// define the constant value
// direction
const ICON_DIRECTION = "/images/icon";
const PICTURE_DIRECTION = "/images/picture";
const FONT_DIRECTION = "/fonts";
// serverAddress
export const SERVER_ADDRESS = "http://localhost:8080";

// iconPath
export const ICONS = {
    TO_UNDER : `${ICON_DIRECTION}/toUnder.png`,
    GIT : `${ICON_DIRECTION}/git.png`,
    PROFILE : `${ICON_DIRECTION}/profile.png`,
    MENU : `${ICON_DIRECTION}/menu.png`,
    LIKE : `${ICON_DIRECTION}/like.png`,
    INFORMATION : `${ICON_DIRECTION}/information.png`,
};

// picturePath
export const IMAGES = {
    COMMUNITY : `${PICTURE_DIRECTION}/community.png`,
    WIKI : `${PICTURE_DIRECTION}/wiki.png`,
};

// fontPath
export const FONTS = {
    NOTOSANS_KR : `${FONT_DIRECTION}/NotoSansKR-Medium.otf`,
};

// api url
export const API_URLS = {
    LOGIN : `${SERVER_ADDRESS}/members/login`,
    SIGNUP : `${SERVER_ADDRESS}/members/create`,
    INFO : `${SERVER_ADDRESS}/members`,
    GET_BOARD : `${SERVER_ADDRESS}/boards`,
    POST_ONE_BOARD : `${SERVER_ADDRESS}/boards/`,
};

// route url
export const ROUTE_URLS = {
    HOME : "/",
    WIKI : "/wiki",
    COMMUNITY : "/community",
    LOGIN : "/login",
    CREATE_ACCOUNT : "/create_account",
};