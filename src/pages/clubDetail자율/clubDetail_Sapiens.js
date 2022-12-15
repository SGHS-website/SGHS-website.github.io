import React from "react";
import "../../styles/clubDetail.css"
import schoolBackground from "../../images/background.jpg";
import Footer from '../Footer'
const clubDetail_Sapiens = () => {
    return (
        <body style={{backgroundColor:"black"}}>
        <div className='banner'>
          <img src={schoolBackground}></img>
          <h2>club</h2>
        </div>
        <img src={require("../../images/img/사피엔스.png")} class="club-detail-img"></img>
          <div class="club-explain">
                <h1 class="club-detail-explain">Sapiens</h1>
                <p>영어로 인류학을 탐구하고 에세이 및 논문 작성으로 결과물을 도출함
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
  
  export default clubDetail_Sapiens;