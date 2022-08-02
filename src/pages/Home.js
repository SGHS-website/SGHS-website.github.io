import React from "react";
import schoolBackground from "../images/background.jpg"
import Ulogo from "../images/UNESCOlogo.png"
import Wlogo from "../images/WASClogo.png"
import schoolLogo from "../images/logo.png"
import '../styles/App.css'
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
const Home = () => {
    return (
        <div>
            <Parallax pages={6} style={{ backgroundColor: "black" }}>
                <ParallaxLayer id="one">
                    <img src={schoolBackground} className="backgroundImage" />
                </ParallaxLayer>
                <ParallaxLayer id="two" offset={1} speed={0.5} factor={1}>
                    <span className="smallletters">certified by </span><span className="bigletters">UNESCO</span><img src={Ulogo} className="logoImage"/>
                </ParallaxLayer>
                <ParallaxLayer id="three" offset={2} speed={0.5} factor={1}>
                    <span className="bigletters">INTELLIGENCE</span>
                </ParallaxLayer>
                <ParallaxLayer id="four" offset={3} speed={0.5} factor={1}>
                    <span className="bigletters">VIRTUE</span>
                </ParallaxLayer>
                <ParallaxLayer id="five" offset={4} speed={0.5} factor={1}>
                    <span className="bigletters">STRENGTH</span>
                </ParallaxLayer>
                <ParallaxLayer id="six" offset={5} speed={0.5} factor={1}>
                    <span className="smallletters">certified by </span><span className="bigletters">WASC</span><img src={Wlogo} className="logoImage" />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
};

export default Home;