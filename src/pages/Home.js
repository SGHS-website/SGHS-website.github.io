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
                    <h2>Section2</h2>
                </ParallaxLayer>
                <ParallaxLayer id="three" offset={2} speed={0.5}>
                    <h2>section3</h2>
                </ParallaxLayer>
                <ParallaxLayer id="four" offset={3} speed={0.5}>
                    
                </ParallaxLayer>
            </Parallax>
            
            <div className="Footer">
               <div className="first">
                   <p>[03066]서울 종로구 성균관로13길 40 <br></br> (명륜1가, 서울국제고등학교)</p>
                   <p> Sponsored by 종로구청 <br></br> Developed by 설국다움</p>
                   <p>@Copyright</p>
               </div>
               <div className="last">
                   <p>Contact Us</p>
                   <img alt="envelope.png" className="envelope"></img>
                   <img alt="insta.png" className="insta"></img>
                   <img alt="image 13.png" className="image13"></img>
                   <img alt="설국다움.png" className="설국다움"></img>
                </div>
            </div>
        
        </div>
    )
};

export default Home;