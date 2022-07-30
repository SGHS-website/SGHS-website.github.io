import React from "react";
import schoolBackground from "../images/background.jpg"
import schoolLogo from "../images/logo.png"
import '../styles/App.css'
import {Parallax, ParallaxLayer} from "@react-spring/parallax"
const Home = () => {
    return (
        <div>
            <Parallax pages={4} style={{backgroundColor:"black"}}>
                <ParallaxLayer id="one">
                    <img src={schoolBackground} className="backgroundImage"/>
                </ParallaxLayer>
                <ParallaxLayer id="two"offset={1} speed={0.5}>
                    <h2>section2</h2>
                </ParallaxLayer>
                <ParallaxLayer id="three"offset={2} speed={0.5}>
                    <h2>section3</h2>
                </ParallaxLayer>
                <ParallaxLayer id="four"offset={3} speed={0.5}>
                    <h2>section4</h2>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
  };
  
export default Home;


