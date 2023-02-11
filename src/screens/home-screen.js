import React, { Component } from "react";
import AboutSection from "./sections/about/about";
import ContactSection from "./sections/contact/contact";
import HeaderSection from "./sections/header/header";
import Navbar from "./sections/navbar/navbar";
import ProjectSection from "./sections/project/project";

class HomeScreen extends Component {
    render() {
        return (
            <div id="home-screen">
                <Navbar />
                <HeaderSection />
                <AboutSection />
                <ProjectSection />
                <ContactSection />
            </div>
        );
    }
}

export default HomeScreen;
