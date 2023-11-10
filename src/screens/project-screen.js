import React, { useEffect, useState } from "react";
import ContactSection from "./sections/contact/contact";
import MoreWorkSection from "./sections/more-work/more-work";
import Navbar from "./sections/navbar/navbar";
import ProjectDetail from "./sections/project-detail/project-detail";
import AppStrings from "../util/strings";

const ProjectScreen = () => {
    const projectIndex = localStorage.getItem(AppStrings.projectIndexKey);
    useEffect(() => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, []);
    return (
        <div id="project-screen">
            <Navbar />
            <ProjectDetail index={projectIndex} />
            <MoreWorkSection index={projectIndex} />
            <ContactSection />
        </div>
    );
};

export default ProjectScreen;
