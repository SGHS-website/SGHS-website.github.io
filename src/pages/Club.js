import React from 'react';
import schoolBackground from "../images/background.jpg"
import studentCouncil from "../images/studentCouncil.png"
const Club = () => {
    return(
      <body>
        <div className='banner'>
          <img src={schoolBackground}></img>
          <h2>Club</h2>
        </div>
        <div className="club_content">
          <div className="content_logo">
              <img src="https://media.euobserver.com/e0e217ad29a2887c28b3732eeef3ee98.jpg"></img>
              <h4>개설년도: 2022</h4>
          </div>
          <div className="content_intro">
              <h1>ARTBEAT</h1>
              <h4>동아리 소개글</h4>
              <p>blahblahblahblahblah</p>
              <div className="content_leaders">
                <h4>부장 - 설국다움</h4>
                <h4>차장 - 설국다움</h4>
              </div>
          </div>           
        </div>
        <div className="club_activity">
          <h2>예술경영 칼럼 활동</h2>
          <hr id="line1"></hr>
          <h2>간단한 활동 소개 글</h2>
          <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</p>
          <hr id="line2"></hr>
          <div className="activity_wrap">
            <div className="sticker1">
              <img src=""></img> 
            </div>
            <div className="sticker1">
              <img src=""></img>
            </div>
            <div className="sticker1">
              <img src=""></img>
            </div>
            <div className="sticker1">
              <img src=""></img>
            </div>
            <div className="sticker1">
              <img src=""></img>
            </div>
            <div className="sticker1">
              <img src=""></img>
            </div>
            <div className="sticker1">
              <img src=""></img>
            </div>
            <div className="sticker1">
              <img src=""></img>
            </div>
            <div className="sticker1">
              <img src=""></img>
            </div>
          </div>
        </div>
      </body>
    );
};
  
export default Club;