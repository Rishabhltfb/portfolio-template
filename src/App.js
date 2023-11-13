import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/home-screen";
import ProjectScreen from "./screens/project-screen";
import AppRoutes from "./util/navigator";

function addCursorEvents() {
    const cursor = document.querySelector(".cursor");
    const hoverElement = document.querySelectorAll(".hover-this");

    const animateit = function (e) {
        const span = this.querySelector(".hover-text");
        if (span) {
            const { offsetX: x, offsetY: y } = e,
                { offsetWidth: width, offsetHeight: height } = this,
                move = 25,
                xMove = (x / width) * (move * 2) - move,
                yMove = (y / height) * (move * 2) - move;

            span.style.transform = `translate(${xMove}px, ${yMove}px)`;

            if (e.type === "mouseleave") span.style.transform = "";
        }
    };

    function resetHover(e) {
        const spanElements = document.querySelectorAll(".hover-text");
        spanElements.forEach((element) => {
            element.style.transform = "";
        });
    }

    const editCursor = (e) => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
    };
    const removeLoader = (e) => {
        const preLoader = document.getElementById("pre-loader");
        preLoader.style.display = "none";
    };

    hoverElement.forEach((element) => {
        element.addEventListener("mouseover", () => {
            cursor.style.transform = "translate(-50%, -50%) scale(5)";
        });

        element.addEventListener("mouseout", () => {
            cursor.style.transform = "translate(0%, 0%) scale(1)";
            resetHover(element);
        });
        element.addEventListener("mousemove", animateit);
    });

    window.addEventListener("mousemove", editCursor);
    window.addEventListener("load", removeLoader);
}

function App() {
    useEffect(() => {
        addCursorEvents();
    }, []);
    return (
        <div className="App">
            <div className="cursor"></div>
            <div id="pre-loader">
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div>
            <Router>
                <Routes>
                    <Route
                        path={AppRoutes.HomeScreenRoute}
                        element={<HomeScreen />}
                    />
                    <Route
                        path={AppRoutes.ProjectScreenRoute}
                        element={<ProjectScreen />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
