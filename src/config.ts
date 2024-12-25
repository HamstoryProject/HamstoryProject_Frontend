// define the constant value
// direction
const IMAGE_DIRECTION = "/images";
const ICON_DIRECTION = "/icon";
const PICTURE_DIRECTION = "/picture";
const FONT_DIRECTION = "/fonts";
const API_AUTH_DIRECTION = "/members";
const ROUTE_COMMUNITY_DIRECTION = "/community";

// serverAddress
export const SERVER_ADDRESS = "http://localhost:8080";

// iconPath
export const ICONS = {
    TO_UNDER : `${IMAGE_DIRECTION}${ICON_DIRECTION}/toUnder.png`,
    GIT : `${IMAGE_DIRECTION}${ICON_DIRECTION}/git.png`,
    PROFILE : `${IMAGE_DIRECTION}${ICON_DIRECTION}/profile.png`,
    MENU : `${IMAGE_DIRECTION}${ICON_DIRECTION}/menu.png`,
    LIKE : `${IMAGE_DIRECTION}${ICON_DIRECTION}/like.png`,
    INFORMATION : `${IMAGE_DIRECTION}${ICON_DIRECTION}/information.png`,
};

// picturePath
export const IMAGES = {
    COMMUNITY : `${IMAGE_DIRECTION}${PICTURE_DIRECTION}/community.png`,
    WIKI : `${IMAGE_DIRECTION}${PICTURE_DIRECTION}/wiki.png`,
};

// fontPath
export const FONTS = {
    NOTOSANS_KR : `${FONT_DIRECTION}/NotoSansKR-Medium.otf`,
};

// api url
export const API_URLS = {
    LOGIN : `${SERVER_ADDRESS}${API_AUTH_DIRECTION}/login`,
    SIGNUP : `${SERVER_ADDRESS}${API_AUTH_DIRECTION}/create`,
    INFO : `${SERVER_ADDRESS}${API_AUTH_DIRECTION}`,
    GET_BOARD : `${SERVER_ADDRESS}/boards`,
};

// route path
export const ROUTE_PATH = {
    COMMUNITY : "community",
    BEST : "best",
    FREE : "free",
    PICTURE : "picture",
    question : "question",
    CREATE_POST : "createPost"
};

// route url
export const ROUTE_URLS = {
    HOME : "/",
    WIKI : "/wiki",
    LOGIN : "/login",
    CREATE_ACCOUNT : "/create_account",
    COMMUNITY : `${ROUTE_COMMUNITY_DIRECTION}`,
    FREE : `${ROUTE_COMMUNITY_DIRECTION}/${ROUTE_PATH.FREE}`,
    PICTURE : `${ROUTE_COMMUNITY_DIRECTION}/${ROUTE_PATH.PICTURE}`,
    QUESTION : `${ROUTE_COMMUNITY_DIRECTION}/${ROUTE_PATH.question}`,
    CREATE_POST : `${ROUTE_COMMUNITY_DIRECTION}/${ROUTE_PATH.CREATE_POST}`,
};