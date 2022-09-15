import React from "react";
import schoolBackground from "../images/background.jpg"
import "../../src/styles/Faq.css";
const Faq = () => {
    return(
      <body style={{backgroundColor: "black"}}>
        <div className='banner'>
          <img src={schoolBackground}></img>
          <h2>FAQs</h2>
        </div>
        <div className="question">
          <p className="ask">Have a Question?</p>
          <p className="inf-faq">설문지/오픈채팅방을 통해 질문을 받고 있습니다!<br></br>재학생용과 외부인용
          <span classname="inf-faq-1">(입학 예정자, 입학 희망자)</span>으로 나누어져 있으니 구분하여<br></br>작성해주시기 바랍니다.
            <br></br>대표 질문은 교육부에서 선발 후 FAQs로 게시합니다.<br></br></p>
          <p className="link">질문링크</p>

          <p className="link-in">재학생용</p>
          <p className="link-out">외부인용</p>
          <p className="faq-line">   </p>
        </div>
        <div class="school">
      <p id="title">학교</p>
      <details class="Q4">
        <summary>정말 수업을 영어로 진행하나요?</summary>
        <p id="a">기본적으로 국어,한국사를 제외한 모든 과목 수업에 영어를 사용합니다. 온라인 클래스 영상이나 수업
        자료(PPT 등)에도 영어를 많이 사용합니다.</p>
      </details><div class="border"></div>
      <details class="Q5">
        <summary>국영수 제외 어떤 과목을 배우나요?</summary>
        <p id="a">제2외국어로 중국어,프랑스어,스페인어를 선택해 배우고, AP 과목으로는 AP
        미시경제,거시경제,인문지리,근대 세계사 이외 사회과 과목으로는 국제 정치 등이 있습니다.</p>
      </details><div class="border"></div>
      <details class="Q7">
        <summary>해외대학 진학을 지원하는 프로그램도 있나요?</summary>
        <p id="a">해외대학 진학을 원하는 학생들을 위해서는 선배들과 선생님들의 특강,AP,SAT 등 시험을 위한 수업,
        해외대학진학부 선생님들의 상담 등이 있습니다.</p>
      </details>
    </div>
    <div class="dorm">
      <p id="title">기숙사</p>
      <details class="Q1">
        <summary>전원이 기숙사에 사나요?</summary>
        <p id="a">간혹 통학하는 학생들도 있으나 대부분의 학생, 사는 지역에 관계없이 기숙사에서 생활합니다.</p>
      </details>
      <div class="border"></div>
      <details class="Q2">
        <summary>기숙사는 몇 명이 사용하나요?</summary>
        <p id="a">대부분의 방은 2인 1실이지만, 1학년 여학생은 한 학기동안 4인 1실을 사용하는 경우가 있습니다.</p>
      </details>
      <div class="border"></div>
      <details class="Q3">
        <summary>룸메이트, 방은 어떻게 배정하나요?</summary>
        <p id="a">방배정은 한 학기마다 새로 진행하며, 완전히 랜덤으로, 제비뽑기를 통해 진행하고 있습니다.</p>
      </details>
    </div>
    <div class="activity">
      <p id="title">활동</p>
      <details class="Q6">
        <summary>다양한 활동을 하다 보면 기본 과목은 공부하기 힘들지 않나요?</summary>
        <p id="a">기본 수업시간뿐만 아니라 방과후,여름방학 강좌,개인 자습시간등을 통해 국영수로 대표되는 기본 과목
        학습도 지원합니다</p>
      </details><div class="border"></div>
      <div class="border"></div>
      <details class="Q8">
        <summary>하루 일과는 어떻게 되나요?</summary>
        <p id="a">아침에 6시 50분에 기상해 운동을 한 후 아침식사를 한 뒤 8시까지 등교합니다. 8시부터 4시까지 학교
        수업을 하고 이후 5시에 저녁식사, 6시 20분부터 10시 50분까지 자습을 진행합니다. 자습이 끝난 후에는
        기숙사로 돌아가고 자유롭게 취침합니다. 취침시간이나 소등시간은 따로 정해져 있지 않습니다.</p>
      </details>
    </div>



      </body>
    );;
  };
  
export default Faq;
