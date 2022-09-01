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
                    <div id="section3_title">
                        Recent News
                    </div>
                    <div id="section3_content">
                        <div className="item" id="item1">
                            <h2>설국다움</h2>
                            <p></p>
                        </div>
                        <div className="item" id="item2">
                            <h2>15기 타임 캡슐 저장식</h2>
                            <p> </p>
                        </div>
                        <div className="item" id="item3">
                            <h2>Sports Day</h2>
                            <p>Sports day was held on July 14th 2022. For the opening ceromony each classes had a parade around the school pitch. 
                               Then the class match finals of 1st and 2nd grades were held consequtively. 
                               The class 2 of the first grade played handball with class 6, and the class 2 took the victory. 
                               The sophomores played volleyball. class won against the class. 
                               While the class matches were happening there were lots of booths ran by the school council. 
                               After students had time to hang around the various booths, at 4pm, freshman and sophomore of each '누리' and '마루' team showed of their amazing cheerleading that they had practiced for weeks. 
                               As soon as the cheerleading ended, the team relay was held. The result of the relay was the victory for the team 누리. 
                               Between the sports day events, art clubs presented splendid performances. 
                               The Sports day ended at 17:00 with the final speech form our old school council and a huge round of applause from the SGHS students.     </p>
                        </div>
                        <div className="item" id="item4">
                            <h2>Title</h2>
                            <p>내용 </p>
                        </div>
                        <div className="item" id="item5">
                            <h2>Title</h2>
                            <p>내용 </p>
                        </div>
                        <div className="item" id="item6">
                            <h2>Title</h2>
                            <p>내용 </p>
                        </div>
                        <div className="item" id="item7">
                            <h2>Title</h2>
                            <p>내용 </p>
                        </div>
                        <div className="item" id="item8">
                            <h2>Title</h2>
                            <p>내용 </p>
                        </div>
                        <div className="item" id="item9">
                            <h2>Title</h2>
                            <p>내용 </p>
                        </div>
                        <div className="item" id="item10">
                            <h2>Title</h2>
                            <p>내용 </p>
                        </div>
                        <div className="item" id="item11">
                            <h2>Title</h2>
                            <p>내용 </p>
                        </div>
                        <div className="item" id="item12">
                            <h2>Title</h2>
                            <p>내용 </p></div>                  
                    </div>
                    
                </ParallaxLayer>
                <ParallaxLayer id="four" offset={3} speed={0.5}>
                    <h2>section4</h2>
                    <div id="section4_content">
                        <div className="section" id="section1">
                           <p>I'm sleepy. I want to go home. BYE</p> 
                        </div>
                        <div className="section" id="section2">
                           <p>Tomorrow we have science test. BYE</p>
                        </div>
                        <div className="section"  id="section3">
                           <p>On Friday, we go home. Let's go. BYE</p>
                        </div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
};

export default Home;