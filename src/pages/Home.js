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
<<<<<<< HEAD
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
=======
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
>>>>>>> b92415deea17ffa80e505e83105d5f29747ea1d5
                        </div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    )
};

export default Home;