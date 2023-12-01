import React from "react";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../util/navigator";

const BackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(AppRoutes.HomeScreenRoute);
        window.location.reload();
    };

    return <div onClick={handleGoBack}> Go Back</div>;
};

export default BackButton;
