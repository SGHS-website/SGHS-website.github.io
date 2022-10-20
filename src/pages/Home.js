import React from "react";
import schoolBackground from "../images/background.jpg"
import keywordVideo from "../images/video1.mp4"
import schoolLogo from "../images/sghs.png"
import '../styles/App.css'
import Footer from './Footer'
import SGLogo from "../images/logo.png"

import { Parallax, ParallaxLayer } from "@react-spring/parallax"
const Home = () => {
    return (
        <div className="home">
            <Parallax pages={5} style={{ backgroundColor: "black" }}>
                <div id="one">
                    <img src={schoolBackground} className="backgroundImage" />
                    <img src={schoolLogo} className='schoolLogo'></img>
                    <h1>
                        Our Eyes in Korea, 
                        <br/> Our Eyes to the World
                        <br/><p>Seoul Global High School</p>
                    </h1>
                 
                </div>
                <div id="two">
                    <video src={keywordVideo} autoplay="autoplay" muted loop="true" width="85%" playsInline></video>
                </div>
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
                            
                        </div>
                        <div className="item" id="item3">
                            <h2>Sports Day</h2>
                        </div>
                        <div className="item" id="item4">
                            <h2>Title</h2>
                        </div>
                        <div className="item" id="item5">
                            <h2>Title</h2>
                        </div>
                        <div className="item" id="item6">
                            <h2>Title</h2>
                        </div>
                        <div className="item" id="item7">
                            <h2>Title</h2>
                        </div>
                        <div className="item" id="item8">
                            <h2>Title</h2>
                        </div>
                        <div className="item" id="item9">
                            <h2>Title</h2>
                        </div>            
                    </div>
                </ParallaxLayer>
                <ParallaxLayer id="four" offset={3} speed={0.5}>
                    <div id="section4_content">
                        <div id="box1">
                            <h1 className="boxtext">WE THE STUDENTS,<br></br>DISCOVER OUR<br></br>OWN TALENTS</h1>
                        </div>
                        <div id="box2">
                            <h1 className="boxtext">WE THE STUDENTS,<br></br>INSPIRE THE WORLD BY<br></br>OUR SELF-EMPOWERMENT</h1>
                        </div>
                        <div id="box3">
                            <h1 className="boxtext">WE THE STUDENTS,<br></br>PROMOTE OUR VALUES<br></br>BY ACTION</h1>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={4} speed={0.5} factor={0.3}>
                <div className="footer">
                    <div className="first">
                        <p>[03066] 서울 종로구 성균관로13길 40 
                            <br/> (명륜1가, 서울국제고등학교)
                            <br/><br/>Sponsored by 종로구청
                            <br/>Developed by 설국다움
                            <br/><br/>@Copyright
                        </p>
                    </div>
                    <div className="last">
                        <p>Contact Us</p>
                        <img src={ SGLogo } className="SGlogo"></img>
                        <span class="material-symbols-outlined">mail</span>
                        
                    </div>
                </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
};

export default Home;