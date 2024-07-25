import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
    const isLoggedIn = sessionStorage.getItem('loginDetails') !== null;

    return (
        isLoggedIn ? element : <Navigate to={"/login"} />
    );
};

export default PrivateRoute;
