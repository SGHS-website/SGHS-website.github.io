import React from "react";
import schoolBackground from "../images/background.jpg"
import jointconference from "../images/ac_01.jpg"
import sportsfestival from "../images/sf1.jpg"
import nurije from "../images/Nurije.png"
import capable from "../images/Capable3.jpg"
import vank from "../images/VANKMUN3.jpg"
import "../../src/styles/Event.css";
import Footer from './Footer'

import { Link } from "react-router-dom";
const Event = () => {
    return (
      <body style={{backgroundColor:"black"}}>
        <div className='banner'>
          <img src={schoolBackground}></img>
          <h2>Event</h2>
        </div>
        <div>
        <h1 className="Sc-Ev">School Events</h1>
        <div className="event">
          <Link to="/club">
            <img src={jointconference} alt="img"></img>
          < p className="e1">2021 연합학술제</p>
          </Link>
          <Link to="/club">
           <img src={sportsfestival} alt="img"></img>
            <p className="e2">2021 체육대회</p>
          </Link>
          <Link to="/club">
            <img src={nurije} alt="img"></img>
            <p className="e3">2021 누리제</p>
          </Link>
          <Link to="/club">
            <img src={sportsfestival} alt="img"></img>
            <p className="e4">VOLUNTEERING</p>
          </Link>
        </div>
        <h1 className="Sc-Ev">Small-Scale Events</h1>
        <div className="event">
        <Link to="/club">
            <img src={capable} alt="img"></img>
            <p className="se1">Capable</p>
          </Link>
          <Link to="/club">
            <img src={vank} alt="img"></img>
            <p className="se2">VANK & MUNlit MUN</p>
          </Link>
          <Link to="/club">
           <img src={nurije} alt="img"></img>
            <p className="se3">2021 누리제</p>
          </Link>
          <Link to="/club">
            <img src={sportsfestival} alt="img"></img>
            <p className="se4">VOLUNTEERING</p>
          </Link>
        </div>
        </div>
        <Footer/>
      </body>
    );;
  };
  
export default Event;