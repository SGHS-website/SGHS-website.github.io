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
            <Parallax pages={4} style={{ backgroundColor: "black" }}>
                <ParallaxLayer id="one">
                    <img src={schoolBackground} className="backgroundImage" />
                </ParallaxLayer>
                <ParallaxLayer id="two" offset={1} speed={2}>
                    <script>
                    function reveal() { function reveal() {
                        var reveals = document.querySelectorAll(".reveal");
                        for (var i = 0; i < reveals.length; i++) {
                            var windowHeight = window.innerHeight;
                            var elementTop = reveals[i].getBoundingClientRect().top;
                            var elementVisible = 150;
                            if (elementTop < windowHeight - elementVisible) {
                            reveals[i].classList.add("active");
                            } else {
                            reveals[i].classList.remove("active");
                            }
                        }
                      }
                    }
                    window.addEventListener("scroll", reveal);
                    </script>
                    <div className="reveal">
                        <span className="smallletters">certified by </span><span className="bigletters">UNESCO</span><img src={Ulogo} className="logoImage"/>
                    </div>
                    <div className="reveal">
                        <span className="bigletters">INTELLIGENCE</span>
                    </div>
                    <div className="reveal">
                        <span className="bigletters">VIRTUE</span>
                    </div>
                    <div className="reveal">
                        <span className="bigletters">STRENGTH</span>
                    </div>
                    <div className="reveal">
                        <span className="smallletters">certified by </span><span className="bigletters">WASC</span><img src={Wlogo} className="logoImage" />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer id="three" offset={2} speed={2} style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "red"}}>
                </ParallaxLayer>
                <ParallaxLayer id="four" offset={3} speed={2} style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
};

export default Home;