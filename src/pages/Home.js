import React from "react";
import schoolBackground from "../images/background.jpg"
import keywordVideo from "../images/video1.mp4"
import keywordVideo2 from "../images/video2.mp4"
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
                    <video src={keywordVideo} autoplay="autoplay" muted loop="true" width="80%" playsInline></video>
                </ParallaxLayer>
                <ParallaxLayer id="three" offset={2} speed={0.5}>
                    <video src={keywordVideo2} autoplay="autoplay" muted loop="true" width="80%" playsInline></video>
                </ParallaxLayer>
                <ParallaxLayer id="four" offset={3} speed={0.5}>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
};

export default Home;