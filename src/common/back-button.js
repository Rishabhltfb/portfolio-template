import React from "react";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../util/navigator";

const BackButton = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(AppRoutes.HomeScreenRoute);
        window.location.reload();
    };

    return (
        <div onClick={handleGoBack}>
            {" "}
            <span role="img" aria-label="Back">
                &#9664; {/* Unicode character for left arrow */}
            </span>{" "}
            Go Back
        </div>
    );
};

export default BackButton;
