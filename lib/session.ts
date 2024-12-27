import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
    id?: number;
}

// 현재 쿠키가 있으면 복호화 후 쿠키를 반환, 없으면 빈 배열 반환
export default function getSession() {
    return getIronSession<SessionContent>(cookies(), {
        cookieName: "user-cookie",
        password: process.env.COOKIE_PASSWORD!,
        cookieOptions: {
            maxAge: 60 * 10,
        },
    });
}
