import React from 'react';
import Footer from './Footer';
import schoolBackground from "../images/background.jpg";
import "../styles/eventde.css";
const eventde = () => {
    return(
      <body style={{backgroundColor: "black"}}>
      <div className='banner'>
        <img src={schoolBackground}></img>
        <h2>EVENTS</h2>
        </div>
        <h1 class="student-detail-name">2022 연합학술제</h1>
          <div class="Congress-explain">
                <img src=""></img>
                <p>설명</p>
                <p>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                  </p>
                  <p>2021.01.01</p>
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
    );;
};
  
export default eventde;