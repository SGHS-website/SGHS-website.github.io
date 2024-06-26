import React from "react";
import "../../styles/clubDetail.css"
import schoolBackground from "../../images/background.jpg";
import Footer from '../Footer'
const clubDetail_InterView = () => {
    return (
        <body style={{backgroundColor:"black"}}>
        <div className='banner'>
          <img src={schoolBackground}></img>
          <h2>club</h2>
        </div>
        <img src={require("../../images/img/인터뷰.png")} class="club-detail-img"></img>
          <div class="club-explain">
                <h1 class="club-detail-explain">Inter:View</h1>
                <p>Inter:View는 학생들과 세계 각지의 비정부 기구, 대사관 등 다양한 기구와의 인터뷰를 통해
                    우리나라의 국제적 입지를 알고 더 넓은 눈으로 세계를 이해하자는 목적을 가진 동아리이다
                </p>
                <span className="club-detail-member">부장-설국다움<br></br>차장-설국다움</span>
                <span className="club-detail-date">2021.01.01</span>
          </div>
          <p class="club-detail-activity-name">예술경영 칼럼 및 문화 생활 관람</p>
        <div class="club-detail-activity">
            <p>간단한 소개와 글~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            </p>
            <div class="club-detail-line"></div>
        </div>
            <div class="club-wrap">
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
        <p class="club-detail-activity-name">예술경영 칼럼 및 문화 생활 관람</p>
        <div class="club-detail-activity">
            <p>간단한 소개와 글~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            </p>
            <div class="club-detail-line"></div>
        </div>
        <div class="club-wrap">
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
            <div style={{marginBottom:"5%"}}></div>
        <Footer/>
      </body>
    );
  };
  
  export default clubDetail_InterView;