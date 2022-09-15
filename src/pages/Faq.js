import React from "react";
import schoolBackground from "../images/background.jpg"
import "../../src/styles/Faq.css";

const Faq = () => {
    return(
      <body>
        <div className='banner'>
          <img src={schoolBackground}></img>
          <h2>FAQs</h2>
        </div>
        <div className="question">
          <p className="ask">Have a Question?</p>
          <p className="inf-faq">설문지/오픈채팅방을 통해 질문을 받고 있습니다!<br></br>재학생용과 외부인용
          <span classname="inf-faq-1">(입학 예정자, 입학 희망자)</span>으로 나누어져 있으니 구분하여<br></br>작성해주시기 바랍니다.
            <br></br>대표 질문은 교육부에서 선발 후 FAQs로 게시합니다.<br></br><br></br><br></br>질문링크</p>

          <p className="link-in">재학생용</p>
          <p className="link-out">외부인용</p>
          <p className="faq-line">   </p>
        </div>


      </body>
    );;
  };
  
export default Faq;
