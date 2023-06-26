import React from "react";
import { Outlet, Navigate } from "react-router-dom";

interface ProtectedRoutesProps {
    authenticatedUser?: string;
  }


  
export const ProtectedRoutes: React.FC<ProtectedRoutesProps> = (props) => {

    const { authenticatedUser } = props;
    const auth = sessionStorage.getItem("loggedIn");

    if(authenticatedUser === "YES"){
        return auth ? <Navigate to={"/dashboard"} /> : <Outlet />
    }

    return auth ? <Outlet /> : <Navigate to={"/login"} />
}

export default ProtectedRoutes;