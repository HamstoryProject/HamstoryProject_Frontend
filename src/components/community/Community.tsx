import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { ROUTE_URLS } from "../../config";

export default function Community() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === ROUTE_URLS.COMMUNITY) {
            navigate(ROUTE_URLS.FREE, { replace: true });
        }
    }, [location.pathname, navigate]);

    return (
        <>
            <Outlet/>
        </>
    );
}