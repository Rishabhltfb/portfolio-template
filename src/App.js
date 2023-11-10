import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/home-screen";
import ProjectScreen from "./screens/project-screen";
import AppRoutes from "./util/navigator";
import { useLocation } from "react-router-dom";

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
}

function App() {
    // useEffect(() => {
    //     const onPopState = () => {
    //         // A route change has occurred
    //         console.log("Route pop occured");
    //     };
    //     const onPushState = () => {
    //         // A route change has occurred
    //         console.log("Route push occured");
    //     };

    //     window.addEventListener("popstate", onPopState);
    //     window.addEventListener("pushState", onPushState);

    //     return () => {
    //         window.removeEventListener("popstate", onPopState);
    //         window.removeEventListener("pushState", onPushState);
    //     };
    // }, []);
    // const location = useLocation();
    // const previousLocation = useRef(null);
    // useEffect(() => {
    //     if (
    //         previousLocation.current !== null &&
    //         previousLocation.current.pathname !== location.pathname
    //     ) {
    //         // A route change has occurred
    //     }

    //     previousLocation.current = location;
    // }, [location]);
    useEffect(() => {
        addCursorEvents();
        // const unlisten = history.listen((location, action) => {
        //     // location is the new location
        //     // action is the action (PUSH, REPLACE, or POP)
        //     console.log("Route changed to:", location.pathname);
        // });
        // // Clean up the listener when the component unmounts
        // return () => {
        //     unlisten();
        // };
    }, []);
    return (
        <div className="App">
            <div className="cursor" />
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
