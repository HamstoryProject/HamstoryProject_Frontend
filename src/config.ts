// define the constant value
// direction
const ICON_DIRECTION = "/images/icon";
const PICTURE_DIRECTION = "/images/picture";
const FONT_DIRECTION = "/fonts";
const API_AUTH_DIRECTION = "/members";
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
    LOGIN : `${SERVER_ADDRESS}${API_AUTH_DIRECTION}/login`,
    SIGNUP : `${SERVER_ADDRESS}${API_AUTH_DIRECTION}/create`,
    INFO : `${SERVER_ADDRESS}${API_AUTH_DIRECTION}`,
    GET_BOARD : `${SERVER_ADDRESS}/boards`,
    POST_ONE_BOARD : `${SERVER_ADDRESS}/boards/`,
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
    COMMUNITY : `/${ROUTE_PATH.COMMUNITY}`,
    BEST : `/community/${ROUTE_PATH.BEST}`,
    FREE : `/community/${ROUTE_PATH.FREE}`,
    PICTURE : `/community/${ROUTE_PATH.PICTURE}`,
    QUESTION : `/community/${ROUTE_PATH.question}`,
    CREATE_POST : `/community/${ROUTE_PATH.CREATE_POST}`,
    LOGIN : "/login",
    CREATE_ACCOUNT : "/create_account",
};