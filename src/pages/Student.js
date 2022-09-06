import React from "react";
import schoolBackground from "../images/background.jpg"
import studentCouncil from "../images/studentCouncil.png"
const Student = () => {
    return (
      <body>
        <div className='banner'>
          <img src={schoolBackground}></img>
          <h2>Student</h2>
        </div>
        <div className='trinity'>
          <h3>Student Coucil</h3>
          <div className='circle'></div>
          <div className='student' id='council'>
            <img src={studentCouncil}/>
            <a href='#councilPop'><h6>Student Council</h6></a>
          </div>
          <div className='student' id='court'>
            <img src={studentCouncil}/>
            <a href='#courtPop'><h6>Student Court</h6></a>
          </div>
          <div className='student' id='congress'>
            <img src={studentCouncil}/>
            <a href='#congressPop'><h6>Student Congress</h6></a>
          </div> 
        </div>
        <div id='councilPop' className='popup'>
          <p>
            (council)Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div id='courtPop' className='popup'>
          <a href="#">&times;</a>
          <p>
            (court)Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div id='congressPop' className='popup'>
          <p>
            (congress)Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </body>
    );;
  };
  
export default Student;