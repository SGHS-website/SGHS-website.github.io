import React from "react";
import schoolBackground from "../images/background.jpg"
import studentCouncil from "../images/studentCouncil.png"
import Footer from './Footer'
import "../styles/StudentDetail.css"
const StudentCongress = () => {
    return (
      <body style={{backgroundColor:"black"}}>
        <div className='banner'>
          <img src={schoolBackground}></img>
          <h2>Student Government</h2>
        </div>
          <h1 class="student-detail-name">Student Congress</h1>

          <div class="Congress-explain">
                <img src=""></img>
                <p>학생회/부서 설명</p>
                <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                </p>
          </div>
            <div class="wrap">
            <div class="sticker1">
                <img src=""></img>
            </div>
            <div class="sticker1">
                <img src=""></img>
            </div>
            <div class="sticker1">
                <img src=""></img>
            </div>
            <div class="sticker1">
                <img src=""></img>
            </div>
            <div class="sticker1">
                <img src=""></img>
            </div>
            <div class="sticker1">
                <img src=""></img>
            </div>
            <div class="sticker1">
                <img src=""></img>
            </div>
            <div class="sticker1">
                <img src=""></img>
            </div>
            <div class="sticker1">
                <img src=""></img>
            </div>
            </div>
        <Footer/>
      </body>
    );
  };
  
export default StudentCongress;