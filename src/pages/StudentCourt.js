import React from "react";
import schoolBackground from "../images/background.jpg"
import studentCouncil from "../images/studentCouncil.png"
import Footer from './Footer'
import "../styles/StudentDetail.css"
const StudentCourt = () => {
    return (
      <body style={{backgroundColor:"black"}}>
        <div className='banner'>
          <img src={schoolBackground}></img>
          <h2>Student Government</h2>
        </div>
          <h1 class="student-detail-name">Student Court</h1>

          <div class="Congress-explain">
                <img src="" style={{width: "80%", float:"none"}}></img>
                <p>About</p>
                <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                </p>
          </div>
        <Footer/>
      </body>
    );
  };
  
export default StudentCourt;