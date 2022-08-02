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
                    <a className="smallletters">certified by </a><a className="bigletters">UNESCO</a><img src={Ulogo} className="logoImage"/>
                </ParallaxLayer>
                <ParallaxLayer id="three" offset={2} speed={0.5} factor={1}>
                    <a className="bigletters">INTELLIGENCE</a>
                </ParallaxLayer>
                <ParallaxLayer id="four" offset={3} speed={0.5} factor={1}>
                    <a className="bigletters">VIRTUE</a>
                </ParallaxLayer>
                <ParallaxLayer id="five" offset={4} speed={0.5} factor={1}>
                    <a className="bigletters">STRENGTH</a>
                </ParallaxLayer>
                <ParallaxLayer id="six" offset={5} speed={0.5} factor={1}>
                    <a className="smallletters">certified by </a><a className="bigletters">WASC</a><img src={Wlogo} className="logoImage" />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
};

export default Home;