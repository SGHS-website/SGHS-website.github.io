import React from "react";
import schoolBackground from "../images/background.jpg"
import "../../src/styles/Event.css";
const Event = () => {
    return (
      <body>
        <div className='banner'>
          <img src={schoolBackground}></img>
          <h2>Event</h2>
        </div>
        <div>
        <h1 className="Sc-Ev">School Events</h1>
        <div className="event">
          <img src="https://cdn.pixabay.com/photo/2020/09/24/16/50/board-5599231_960_720.png" alt="img"></img>
          <p className="e1">2021 연합학술제</p>
          <img src="https://cdn.pixabay.com/photo/2020/09/24/16/50/board-5599231_960_720.png" alt="img"></img>
          <p className="e2">2021 체육대회</p>
          <img src="https://cdn.pixabay.com/photo/2020/09/24/16/50/board-5599231_960_720.png" alt="img"></img>
          <p className="e3">2021 누리제</p>
          <img src="https://cdn.pixabay.com/photo/2020/09/24/16/50/board-5599231_960_720.png" alt="img"></img>
          <p className="e4">VOLUNTEERING</p>
        </div>
        <h1 className="Sc-Ev">Small-Scale Events</h1>
        <div className="event">
          <img src="https://cdn.pixabay.com/photo/2020/09/24/16/50/board-5599231_960_720.png" alt="img"></img>
          <p className="se1">Capable</p>
          <img src="https://cdn.pixabay.com/photo/2020/09/24/16/50/board-5599231_960_720.png" alt="img"></img>
          <p className="se2">VANK & MUNlit MUN</p>
          <img src="https://cdn.pixabay.com/photo/2020/09/24/16/50/board-5599231_960_720.png" alt="img"></img>
          <p className="se3">2021 누리제</p>
          <img src="https://cdn.pixabay.com/photo/2020/09/24/16/50/board-5599231_960_720.png" alt="img"></img>
          <p className="se4">VOLUNTEERING</p>
        </div>
        </div>
      </body>
    );;
  };
  
export default Event;