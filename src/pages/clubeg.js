import React from 'react';
import schoolBackground from "../images/background.jpg"
import studentCouncil from "../images/studentCouncil.png"
import "../../src/styles/Club.css";
const Club = () => {
    return (
    <>
      <div className='banner'>
        <img src={schoolBackground}></img>
        <h2>Club</h2>
      </div>
      <div className="Club1">
          <img src="https://cdn.pixabay.com/photo/2020/09/24/16/50/board-5599231_960_720.png" alt="img"></img>
          <p className="academics">ACADEMICS</p>
          <img src="https://cdn.pixabay.com/photo/2020/09/24/16/50/board-5599231_960_720.png" alt="img"></img>
          <p className="arts">ARTS</p>
          <img src="https://cdn.pixabay.com/photo/2020/09/24/16/50/board-5599231_960_720.png" alt="img"></img>
          <p className="sports">SPORTS</p>
          <img src="https://cdn.pixabay.com/photo/2020/09/24/16/50/board-5599231_960_720.png" alt="img"></img>
          <p className="volunteering">VOLUNTEERING</p>
      </div>
    </>
    );

}

  
export default Club;