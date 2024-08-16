import { useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

export default function Community() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname === "/community") {
            navigate("/community/free", { replace: true });
        }
    }, [location.pathname, navigate]);

    return (
        <>
            <Outlet/>
        </>
    );
}