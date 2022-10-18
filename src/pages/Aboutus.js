import React from "react";
import schoolBackground from "../images/background.jpg"
import "../../src/styles/Aboutus.css";
import Footer from './Footer'
const Competition = () => {
    return (
      <body style={{backgroundColor:"black"}}>
        <div className='banner'>
          <img src={schoolBackground}></img>
          <h2>Competition</h2>
        </div>
        
        {/*여기부터*/}

        <h1 className="who">Our Team</h1>
        <div className="crew">
            <div className="Us">
            <img src={require("../images/aboutus/Daeun.jpg")}/>
                <p className="member">Daeun Lee | 이다은<br></br>Lead Developer</p>    
            </div>
            <div className="Us">
                <img src={require("../images/aboutus/Rian.jpeg")}/>                
                <p className="member">Rian Park | 박이안<br></br>Lead Designer</p>    
            </div>
            <div className="Us">
                <img src={require("../images/aboutus/Irene.jpeg")}/>
                <p className="member">Irene Huh | 허서윤 <br></br>Lead Treasurer</p>    
            </div> 
            <div className="Us">
                <img src={require("../images/aboutus/Irene.jpeg")}/>
                <p className="member">Taehui Kang | 강태희 <br></br>Developer</p>    
            </div>
            <div className="Us">
                <img src={require("../images/aboutus/Yeseo.jpeg")}/>
                <p className="member">Yeseo Shin | 신예서 <br></br>Developer</p>    
            </div>
            <div className="Us">
                <img src={require("../images/aboutus/Gaeun.jpeg")}/>
                <p className="member">Gaeun Kim | 김가은 <br></br>Progress Manager</p>    
            </div>
        </div>
        <Footer/>
      </body>
    );
  };
  
export default Competition;