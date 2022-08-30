import React from 'react';
import "../styles/Club.css";
const Club = () => {
    return(
      <body>
        <h1 class="eventname"> 연합학술제 </h1>
          <div>
            <h2 class="eventdate"> 
            <p> 2021.01.01 </p>
            <p> 설명: 나나나나나나ㅏ나나나나나나 </p></h2>
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
              <div class="picture">
                <img src={require("../images/img/도담다담.jpg")}/>
              </div> 
        </div>
      </body>
    );;
};
  
export default Club;