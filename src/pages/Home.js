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
                            <h2>Title</h2>
                            <p>Heyyyyyyyyyyyyyyyy. This is recents news. blah blah blah blahblah blahblah blahvblah blahblah blahblah blah </p>
                        </div>
                        <div className="item" id="item2">
                        <h2>Title</h2>
                            <p>Heyyyyyyyyyyyyyyyy. This is recents news. blah blah blah blahblah blahblah blahvblah blahblah blahblah blah </p>
                        </div>
                        <div className="item" id="item3">
                        <h2>Title</h2>
                            <p>Heyyyyyyyyyyyyyyyy. This is recents news. blah blah blah blahblah blahblah blahvblah blahblah blahblah blah </p>
                        </div>
                        <div className="item" id="item4">
                        <h2>Title</h2>
                            <p>Heyyyyyyyyyyyyyyyy. This is recents news. blah blah blah blahblah blahblah blahvblah blahblah blahblah blah </p>
                        </div>
                        <div className="item" id="item5">
                        <h2>Title</h2>
                            <p>Heyyyyyyyyyyyyyyyy. This is recents news. blah blah blah blahblah blahblah blahvblah blahblah blahblah blah </p>
                        </div>
                        <div className="item" id="item6">
                        <h2>Title</h2>
                            <p>Heyyyyyyyyyyyyyyyy. This is recents news. blah blah blah blahblah blahblah blahvblah blahblah blahblah blah </p>
                        </div>
                        <div className="item" id="item7">
                        <h2>Title</h2>
                            <p>Heyyyyyyyyyyyyyyyy. This is recents news. blah blah blah blahblah blahblah blahvblah blahblah blahblah blah </p>
                        </div>
                        <div className="item" id="item8">
                        <h2>Title</h2>
                            <p>Heyyyyyyyyyyyyyyyy. This is recents news. blah blah blah blahblah blahblah blahvblah blahblah blahblah blah </p>
                        </div>
                        <div className="item" id="item9">
                        <h2>Title</h2>
                            <p>Heyyyyyyyyyyyyyyyy. This is recents news. blah blah blah blahblah blahblah blahvblah blahblah blahblah blah </p>
                        </div>
                        <div className="item" id="item10">
                        <h2>Title</h2>
                            <p>Heyyyyyyyyyyyyyyyy. This is recents news. blah blah blah blahblah blahblah blahvblah blahblah blahblah blah </p>
                        </div>
                        <div className="item" id="item11">
                        <h2>Title</h2>
                            <p>Heyyyyyyyyyyyyyyyy. This is recents news. blah blah blah blahblah blahblah blahvblah blahblah blahblah blah </p>
                        </div>
                        <div className="item" id="item12">
                        <h2>Title</h2>
                            <p>Heyyyyyyyyyyyyyyyy. This is recents news. blah blah blah blahblah blahblah blahvblah blahblah blahblah blah </p></div>                  
                    </div>
                </ParallaxLayer>
                <ParallaxLayer id="four" offset={3} speed={0.5}>
                    <h2>section4</h2>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
};

export default Home;