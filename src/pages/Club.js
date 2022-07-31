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
        <div className='trinity'>
          <h3>Student Coucil</h3>
          <div className='circle'></div>
          <div className='student' id='council'>
            <img src={studentCouncil}/>
            <h6>Student Council</h6>
          </div>
          <div className='student' id='court'>
            <img src={studentCouncil}/>
            <h6>Student Court</h6>
          </div>
          <div className='student' id='congress'>
            <img src={studentCouncil}/>
            <h6>Student Congress</h6>
          </div>
          
        </div>
      </body>
    );
  };
  
export default Club;