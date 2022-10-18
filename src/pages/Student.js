import React from "react";
import schoolBackground from "../images/background.jpg"
import studentCouncil from "../images/studentCouncil.png"
import Footer from './Footer'

const Student = () => {
    return (
      <body style={{backgroundColor:"black"}}>
        <div className='banner'>
          <img src={schoolBackground}></img>
          <h2>Student Government</h2>
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
          <a href="#">&times;</a>
          <p>
          councilcouncil councilcouncilc ouncilcouncilco uncilcouncilcouncilcouncilcouncilcouncilcouncilcouncil
          </p>
        </div>
        <div id='courtPop' className='popup'>
          <a href="#">&times;</a>
          <p>
          courtcourtcourtcourtc ourtcourtcourtcourtcourtcourtcourtco urtcourtcourtcourtcourtcourtcourtcourtcourt
          </p>
        </div>
        <div id='congressPop' className='popup'>
          <a href="#">&times;</a>
          <p>
          congresscongresscongresscong resscongresscongresscongresscongr esscongresscongresscongresscongress
          </p>
        </div>
        <Footer/>
      </body>
    );;
  };
  
export default Student;