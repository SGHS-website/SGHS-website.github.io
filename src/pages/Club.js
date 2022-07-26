import React from 'react';
import schoolBackground from "../images/background.jpg";
import "../styles/Club.css";
import Footer from './Footer'
import { Link } from "react-router-dom";

const Club = () => {
    return(
    <body style={{backgroundColor: "black"}}>
      <div className="banner">
        <img src={schoolBackground}></img>
        <h2>Club</h2>   
      </div>
      <div className="Club1">
        <a href= "#academic">
            <img src={require("../images/academics.png")}/>
            <p className="academics"> ACADEMICS </p>
        </a>
        <a href= "#art">
            <img src={require("../images/arts.png")}/>
            <p className="arts"> ARTS </p>
        </a>
        <a href= "#sport">
            <img src={require("../images/sports.png")}/>
            <p className="sports"> SPORTS</p>
        </a>
        <a href= "#volunteerings">
            <img src={require("../images/volunteering.png")}/>
            <p className="volunteering"> VOLUNTEERING</p>
        </a>
      </div>

    <h1 class="category1"><div id="academic"> ACADEMICS </div></h1>
        <div>
            <ul class="list1">
            <li><b><h2> SOCIETY </h2></b></li>
              <div class="sub-category">
                <div class="club"> 
                    <img src={require("../images/img/도담다담.jpg")}/>
                    <h2> 도담다담 </h2>
                </div>
                <Link to="/clubDetail_베르데">
                <div class="club"> 
                    <img src={require("../images/img/베르데.jpg")}/> 
                    <h2> 베르데 </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_Bloomsbury">
                <div class="club"> 
                    <img src={require("../images/img/대체용.png")}/> 
                    <h2> 블룸즈버리 </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_우나">
                <div class="club"> 
                    <img src={require("../images/img/우나.PNG")}/> 
                    <h2> 우나 </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_프시케">
                <div class="club"> 
                    <img src={require("../images/img/프시케.jpg")}/> 
                    <h2> 프시케 </h2> 
                </div>
                </Link>
                <div class="club"> 
                    <img src={require("../images/img/다이스.jpg")}/>
                    <h2> DAIS </h2> 
                </div>
                <div class="club"> 
                    <img src={require("../images/img/다르마.jpg")}/> 
                    <h2> 다르마 </h2> 
                </div>
                <Link to="/clubDetail_DECA">
                <div class="club"> 
                    <img src={require("../images/img/대체용.png")}/> 
                    <h2> DECA+ </h2> 
                </div>
                </Link>
                <div class="club"> 
                    <img src={require("../images/img/이콘.jpg")}/> 
                    <h2> ECON </h2> 
                </div>
                <Link to="/clubDetail_피그말리온">
                <div class="club"> 
                    <img src={require("../images/img/대체용.png")}/> 
                    <h2> 피그말리온 </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_헤르츠">
                <div class="club"> 
                    <img src={require("../images/img/헤르츠.jpg")}/> 
                    <h2> 헤르츠 </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_InterView">
                <div class="club">
                    <img src={require("../images/img/인터뷰.png")}/> 
                    <h2> Inter:View </h2> 
                </div>
                </Link>
                <div class="club"> 
                    <img src={require("../images/img/로고스.jpg")}/> 
                    <h2> LOGOS </h2> 
                </div>
                <div class="club"> 
                    <img src={require("../images/img/문릿.jpg")}/> 
                    <h2> MUNlit </h2> 
                </div>
                <Link to="/clubDetail_Sapiens">
                <div class="club"> 
                    <img src={require("../images/img/사피엔스.png")}/> 
                    <h2> Sapiens </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_Sherlockplus">
                <div class="club"> 
                    <img src={require("../images/img/설록.jpg")}/> 
                    <h2> 설록 </h2> 
                </div>
                </Link>
                <div class="club"> 
                     <img src={require("../images/img/반크.jpeg")}/> 
                     <h2> VANK@SGHS </h2> 
                </div>
                <div class="club"> 
                    <img src={require("../images/img/와델씨.jpg")}/> 
                    <h2> YDLC </h2> 
                </div>
              </div>
            </ul>

            <ul class="list2">
              <li><h2><b> LANGUAGES </b></h2></li>
                <div class="sub-category">
                <div class="club"> 
                    <img src={require("../images/img/글담.jpg")}/> 
                    <h2> 글담 </h2> 
                </div>
                <Link to="/clubDetail_꼬망세">
                <div class="club"> 
                    <img src={require("../images/img/꼬망세.jpg")}/> 
                    <h2> 꼬망세 </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_단비">
                <div class="club"> 
                    <img src={require("../images/img/대체용.png")}/> 
                    <h2> 단비 </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_Amaranthplus">
                <div class="club"> 
                    <img src={require("../images/img/아마란스.png")}/> 
                    <h2> 아마란스 </h2> 
                </div>
                </Link>
              </div>

              <li><h2><b> STEM </b></h2></li>
              <div class="sub-category">
              <Link to="/clubDetail_디벨로퍼스">
                <div class="club"> 
                    <img src={require("../images/img/디벨로퍼스.jpg")}/> 
                    <h2> Developers </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_에렌시아">
                <div class="club"> 
                    <img src={require("../images/img/에렌시아.jpg")}/> 
                    <h2> Herencia </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_츄러스">
                <div class="club"> 
                    <img src={require("../images/img/츄러스.jpg")}/> 
                    <h2> 츄러스 </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_포텐시아">
                <div class="club"> 
                    <img src={require("../images/img/포텐시아.jpg")}/> 
                    <h2> 포텐시아 </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_하랑">
                <div class="club"> 
                    <img src={require("../images/img/대체용.png")}/> 
                    <h2> 하랑 </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_bio_psychologyhonors">
                <div class="club"> 
                    <img src={require("../images/img/바싸코.png")}/> 
                    <h2> bio-psychology <br/> honors club </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_VarlaEdibleInsectClub">
                <div class="club"> 
                    <img src={require("../images/img/식용곤충.png")}/> 
                    <h2> Varlà Edible Insect Club </h2> 
                </div>
                </Link>
            </div>
        </ul>
      </div>

    <h1 class="category2"><div id="art"> ARTS </div></h1>
    <div>
        <ul class="list1">
            <div class="sub-category">
                <div class="club"> 
                    <img src={require("../images/img/데라.png")}/> 
                    <h2> 데라 </h2> 
                </div>
                <Link to="/clubDetail_물소리바람소리">
                <div class="club"> 
                    <img src={require("../images/img/물소리바람소리.jpg")}/> 
                    <h2> 물소리 바람소리 </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_벨아르떼">
                <div class="club"> 
                    <img src={require("../images/img/벨아르떼.jpg")}/> 
                    <h2> 벨아르떼 </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_ARTBEAT">
                <div class="club"> 
                    <img src={require("../images/img/아트비트.jpg")}/> 
                    <h2> 아트비트 </h2> 
                </div>
                </Link>
                <div class="club"> 
                    <img src={require("../images/img/작은연인들.png")}/> 
                    <h2> 작은 연인들 </h2> 
                </div>
                <Link to="/clubDetail_치즈">
                <div class="club"> 
                    <img src={require("../images/img/치즈.jpg")}/> 
                    <h2> 치즈 </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_TIME">
                <div class="club"> 
                    <img src={require("../images/img/타임.jpg")}/> 
                    <h2> TIME </h2> 
                </div>
                </Link>
                <Link to="/clubDetail_SCAH">
                <div class="club"> 
                    <img src={require("../images/img/스카.jpg")}/> 
                    <h2> SCAH </h2> 
                </div>
                </Link>
                <div class="club"> 
                    <img src={require("../images/img/엑스타시.jpg")}/> 
                    <h2> X-TASY </h2> 
                </div>
            </div>
        </ul>
    </div>

    <h1 class="category2"><div id="sport"> SPORTS </div></h1>
    <div>
        <ul class="list1">
            <div class="sub-category">
            <Link to="/clubDetail_구텐탁구">
                <div class="club"> 
                    <img src={require("../images/img/구텐탁구.jpg")}/> 
                    <h2> 구텐탁구 </h2> 
                </div>
                </Link>
                <div class="club"> 
                    <img src={require("../images/img/배드민턴.png")}/> 
                    <h2> 배드민턴 </h2> 
                </div>
                <div class="club"> 
                    <img src={require("../images/img/대체용.png")}/> 
                    <h2> 뱅가즈 </h2> 
                </div>
                <div class="club"> 
                    <img src={require("../images/img/대체용.png")}/> 
                    <h2> 설래미 </h2> 
                </div>
                <Link to="/clubDetail_SUIS">
                <div class="club"> 
                    <img src={require("../images/img/스위스.jpg")}/> 
                    <h2> 스위스 </h2> 
                </div>
                </Link>
                <div class="club"> 
                    <img src={require("../images/img/대체용.png")}/> 
                    <h2> 아싸 </h2> 
                </div>
                <div class="club"> 
                    <img src={require("../images/img/대체용.png")}/> 
                    <h2> 여차저차 </h2> 
                </div>
                <div class="club"> 
                    <img src={require("../images/img/화용월태.jpg")}/> 
                    <h2> 화용월태 </h2> 
                </div>
                <div class="club"> 
                    <img src={require("../images/img/대체용.png")}/> 
                    <h2> 기합소리 </h2> 
                </div>
                <div class="club"> 
                    <img src={require("../images/img/키마.png")}/> 
                    <h2> kYMA </h2> 
                </div>
            </div>
        </ul>
    </div>

    <h1 class="category2"><div id="volunteerings"> VOLUNTEERING </div></h1>
    <div>
        <ul class="list1">
            <div class="sub-category">
                <div class="club"> 
                    <img src={require("../images/img/굿네이버스.jpg")}/> 
                    <h2> 굿네이버스 </h2> 
                </div>
                <div class="club"> 
                    <img src={require("../images/img/해비타트.jpg")}/> 
                    <h2> 해비타트 </h2> 
                </div>
                <div class="club"> 
                    <img src={require("../images/img/홍보대사.jpg")}/> 
                    <h2> 홍보대사 </h2> 
                </div>
                <div class="club"> 
                    <img src={require("../images/img/액츠.jpg")}/> 
                    <h2> ACTS </h2> 
                </div>
                <div class="club"> 
                    <img src={require("../images/img/방송부.jpg")}/> 
                    <h2> SGBC </h2> 
                </div>
                <div class="club"> 
                    <img src={require("../images/img/쌤.jpeg")}/> 
                    <h2> SSAM </h2> 
                </div>
            </div>
        </ul>
    </div>
    <Footer/>
    </body>
    );;
};

  
export default Club;