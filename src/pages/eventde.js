import React from 'react';
import "../styles/eventde.css";
const Club = () => {
    return(
      <body>
        <h1 class="eventname"> 연합학술제 </h1>
          <div class="eventdetail"> 
            <p class="eventdate"> 2021. 01. 01 </p>
            <p class="detail"> 설명: 연합학술제는 이러한 행사입니다. 연합학술제는 이 날에 진행되었으며 많은 학생들이 참여하였습니다. </p>
          </div>  
          <div class="picture">
            <img src={require("../images/img/도담다담.jpg")}/>
          </div> 
          <div class="picture">
            <img src={require("../images/img/도담다담.jpg")}/>
          </div> 
          <div class="picture">
            <img src={require("../images/img/도담다담.jpg")}/>
          </div> 
          <div class="picture">   
            <img src={require("../images/img/도담다담.jpg")}/>
          </div> 
          <div class="picture">
            <img src={require("../images/img/도담다담.jpg")}/>
          </div> 
      </body>
    );;
};
  
export default Club;