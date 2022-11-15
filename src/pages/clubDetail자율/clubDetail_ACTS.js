import React from "react";
import "../../styles/clubDetail.css"
import schoolBackground from "../../images/background.jpg";
import Footer from '../Footer'
const ACTS = () => {
    return (
        <body style={{backgroundColor:"black"}}>
        <div className='banner'>
          <img src={schoolBackground}></img>
          <h2>club</h2>
        </div>
        <img src="" class="club-detail-img"></img>
          <div class="club-explain">
                <h1 class="club-detail-explain">ACTS</h1>
                <p>함께 예배를 드리고 셀모임을 통해 교제를 나누는 기독교 동아리입니다
                </p>
                <span className="club-detail-member">부장-설국다움<br></br>차장-설국다움</span>
                <span className="club-detail-date">2021.01.01</span>
          </div>
          <p class="club-detail-activity-name">예술경영 칼럼 및 문화 생활 관람</p>
          <div class="club-wrap">
                <p>예수님의 흔적을 남기는 사람들 - 예배<br></br>
                                            <ul></ul></p>
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
  
  export default ACTS;