import React from "react";
import schoolBackground from "../images/background.jpg"
import schoolLogo from "../images/logo.png"
import '../styles/App.css'
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
const Home = () => {
    return (
        <div>
            <Parallax pages={4} style={{ backgroundColor: "black" }}>
                <ParallaxLayer id="one">
                    <img src={schoolBackground} className="backgroundImage" />
                </ParallaxLayer>
                <ParallaxLayer id="two" offset={1} speed={0.5}>
                    <h2>section2</h2>
                </ParallaxLayer>
                <ParallaxLayer id="three" offset={2} speed={0.5}>
                    <h2>section3</h2>
                </ParallaxLayer>
                <ParallaxLayer id="four" offset={3} speed={0.5}>
                    <div className="container">
                        <div className="one">
                            <h1>WE THE STUDENTS, DISCOVER OUR OWN TALENTS</h1>
                            <h2>
                              <a href="club.html">-club</a>
                            </h2>
                        </div>
                        <div className="two">
                            <h1>WE THE STUDENTS, INSPIRE THE WORLD BY OUR SELF-EMPOWERMENT</h1>
                            <h3>
                              <a href="school events.html">-school events</a>
                            </h3>
                        </div>
                        <div className="three">
                            <h1>WE THE STUDENTS, DEVELOP THIS WEBSITE</h1>
                            <h4>
                              <a href="website.html">-website</a>
                            </h4>
                        </div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
};

export default Home;