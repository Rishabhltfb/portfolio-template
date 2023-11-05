import React, { useEffect, useState } from "react";
import ContactSection from "./sections/contact/contact";
import MoreWorkSection from "./sections/more-work/more-work";
import Navbar from "./sections/navbar/navbar";

const ProjectScreen = () => {
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, []);
    return (
        <div id="project-screen">
            <Navbar />
            <MoreWorkSection index={1} />
            <ContactSection />
        </div>
    );
};

export default ProjectScreen;
