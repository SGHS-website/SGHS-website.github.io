import React from "react";
import schoolBackground from "../images/background.jpg"
import "../styles/AboutUs.css";
import Footer from './Footer'
const AboutUs = () => {
    return (
      <body style={{backgroundColor:"black"}}>
        <div className='banner'>
          <img src={schoolBackground}></img>
          <h2>About Us</h2>
        </div>
        
        {/*여기부터*/}

        <h1 className="who">Our Team</h1>
        <div className="crew">
            <div className="Us">
            <img src={require("../images/aboutus/Blank.jpeg")}/>
                <p className="member">Daeun Lee | 이다은<br></br>Lead Developer</p>    
            </div>
            <div className="Us">
                <img src={require("../images/aboutus/Irene.jpeg")}/>
                <p className="member">Irene Huh | 허서윤 <br></br>Lead Project Manager</p>    
            </div> 
            <div className="Us">
                <img src={require("../images/aboutus/Rian.jpeg")}/>                
                <p className="member">Rian Park | 박이안<br></br>Lead Designer</p>    
            </div>
            <div className="Us">
                <img src={require("../images/aboutus/Haeun.jpeg")}/>
                <p className="member">Haeun Kim | 김하은 <br></br>Developer</p>    
            </div>
            <div className="Us">
                <img src={require("../images/aboutus/Hannah.jpeg")}/>
                <p className="member">Hannah Kim | 김헤나 <br></br>Designer</p>    
            </div>
            <div className="Us">
                <img src={require("../images/aboutus/Blank.jpeg")}/>
                <p className="member">Taehui Kang | 강태희 <br></br>Developer</p>    
            </div>
            <div className="Us">
                <img src={require("../images/aboutus/Seojin.jpeg")}/>
                <p className="member">Seojin Lee | 이서진 <br></br>Developer</p>    
            </div>
            <div className="Us">
                <img src={require("../images/aboutus/Dohyun.jpeg")}/>
                <p className="member">Dohyun Lee | 이도현 <br></br>Developer</p>    
            </div>
            <div className="Us">
                <img src={require("../images/aboutus/Gaeun.jpeg")}/>
                <p className="member">Gaeun Kim | 김가은 <br></br>Project Manager</p>    
            </div>
            <div className="Us">
                <img src={require("../images/aboutus/Jinho.jpeg")}/>
                <p className="member">Jinho Yin | 인진호 <br></br>Developer</p>    
            </div>
            <div className="Us">
                <img src={require("../images/aboutus/Blank.jpeg")}/>
                <p className="member">Seunghyeon Yoo | 유승현 <br></br>Developer</p>    
            </div>
            <div className="Us">
                <img src={require("../images/aboutus/Yeseo.jpeg")}/>
                <p className="member">Yeseo Shin | 신예서 <br></br>Developer</p>    
            </div>
        </div>
        <Footer/>
      </body>
    );
  };
  
export default AboutUs;