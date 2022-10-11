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
        <div id='councilPop' className='popup'>
          <a href="#">&times;</a>
          <p>
          councilcouncilcouncilcouncilcouncilcouncilcouncilcouncilcouncilcouncilcouncilcouncilcouncilcouncil
          </p>
        </div>
        <div id='courtPop' className='popup'>
          <a href="#">&times;</a>
          <p>
          courtcourtcourtcourtcourtcourtcourtcourtcourtcourtcourtcourtcourtcourtcourtcourtcourtcourtcourtcourt
          </p>
        </div>
        <div id='congressPop' className='popup'>
          <a href="#">&times;</a>
          <p>
          congresscongresscongresscongresscongresscongresscongresscongresscongresscongresscongresscongress
          </p>
        </div>

      </body>
    );;
  };
  
export default Student;