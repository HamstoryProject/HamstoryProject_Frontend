import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children} : {children : React.ReactNode}){
    const user = null;

    if(user === null){
        return <Navigate to="/login"/>
    }
    
    return children;
}