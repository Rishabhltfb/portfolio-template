import React, { useEffect, useState } from "react";
import ContactSection from "./sections/contact/contact";
import MoreWorkSection from "./sections/more-work/more-work";
import ProjectDetail from "./sections/project-detail/project-detail";
import AppStrings from "../util/strings";
import ProjectNavbar from "./sections/navbar/project-navbar";

const ProjectScreen = () => {
    const projectIndex = parseInt(
        localStorage.getItem(AppStrings.projectIndexKey)
    );
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, []);
    return (
        <div id="project-screen">
            <ProjectNavbar />
            <ProjectDetail index={projectIndex} />
            <MoreWorkSection index={projectIndex} />
            <ContactSection />
        </div>
    );
};

export default ProjectScreen;
