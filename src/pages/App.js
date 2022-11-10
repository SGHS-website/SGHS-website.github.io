import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Club from './Club';
import Event from './Event';
import AboutUs from './Aboutus';
import Student from './Student';
import Faq from './Faq';
import Eventde from './eventde'
import ClubDetail from './clubDetail'
import Navigationbar from './Navigationbar';
import StudentCongress from './StudentCongress';
import StudentCouncil from './StudentCouncil';
import StudentCourt from './StudentCourt';
import ARTBEAT from './clubDetail자율/clubDetail_ARTBEAT';
import DECA from './clubDetail자율/clubDetail_DECA';
import Bloomsbury from './clubDetail자율/clubDetail_Bloomsbury';
import InterView from './clubDetail자율/clubDetail_InterView';
import Sherlockplus from './clubDetail자율/clubDetail_Sherlockplus';
import 단비 from './clubDetail자율/clubDetail_단비';
import 디벨로퍼스 from './clubDetail자율/clubDetail_디벨로퍼스';
import 베르데 from './clubDetail자율/clubDetail_베르데';
import 에렌시아 from './clubDetail자율/clubDetail_에렌시아';
import 포텐시아 from './clubDetail자율/clubDetail_포텐시아';
import 프시케 from './clubDetail자율/clubDetail_프시케';
import 피그말리온 from './clubDetail자율/clubDetail_피그말리온';
import 하랑 from './clubDetail자율/clubDetail_하랑';
import 헤르츠 from './clubDetail자율/clubDetail_헤르츠';
import 우나 from './clubDetail자율/clubDetail_우나';
import VarlaEdibleInsectClub from './clubDetail자율/clubDetail_VarlaEdibleInsectClub';
import 츄러스 from './clubDetail자율/clubDetail_츄러스';
import Sapiens from './clubDetail자율/clubDetail_Sapiens';
import 꼬망세 from './clubDetail자율/clubDetail_꼬망세';
import Amaranthplus from './clubDetail자율/clubDetail_Amaranthplus';
import bio_psychologyhonors from './clubDetail자율/clubDetail_bio_psychologyhonors';
import EYE from './clubDetail자율/clubDetail_EYE';
import 벨아르떼 from './clubDetail자율/clubDetail_벨아르떼';
import SCAH from './clubDetail자율/clubDetail_SCAH';
import SUIS from './clubDetail자율/clubDetail_SUIS';
import TIME from './clubDetail자율/clubDetail_TIME';
import 물소리바람소리 from './clubDetail자율/clubDetail_물소리바람소리';
import 구텐탁구 from './clubDetail자율/clubDetail_구텐탁구';
import 데라 from './clubDetail자율/clubDetail_데라';
import 키마 from './clubDetail자율/clubDetail_키마';
import 치즈 from './clubDetail자율/clubDetail_치즈';
import Habitat from './clubDetail자율/clubDetail_Habitat';
import 홍보대사 from './clubDetail자율/clubDetail_홍보대사';
import ACTS from './clubDetail자율/clubDetail_ACTS';
function App() {
  return (
    <div className="App">
        <Router>
            <Navigationbar />
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='/club' element={<Club />}/>
                <Route path='/event' element={<Event />}/>
                <Route path='/aboutus' element={<AboutUs />}/>
                <Route path='/student' element={<Student />}/>
                <Route path='/faq' element={<Faq />}/>
                <Route path = '/eventde' element={<Eventde/>}/>
                <Route path = '/clubDetail' element={<ClubDetail/>}/>
                <Route path = '/StudentCongress' element={<StudentCongress/>}/>
                <Route path = '/StudentCouncil' element={<StudentCouncil/>}/>
                <Route path = '/StudentCourt' element={<StudentCourt/>}/>
                <Route path = '/clubDetail_ARTBEAT' element={<ARTBEAT/>}/>
                <Route path = '/clubDetail_Bloomsbury' element={<Bloomsbury/>}/>
                <Route path = '/clubDetail_DECA' element={<DECA/>}/>
                <Route path = '/clubDetail_단비' element={<단비/>}/>
                <Route path = '/clubDetail_디벨로퍼스' element={<디벨로퍼스/>}/>
                <Route path = '/clubDetail_베르데' element={<베르데/>}/>
                <Route path = '/clubDetail_에렌시아' element={<에렌시아/>}/>
                <Route path = '/clubDetail_포텐시아' element={<포텐시아/>}/>
                <Route path = '/clubDetail_프시케' element={<프시케/>}/>
                <Route path = '/clubDetail_피그말리온' element={<피그말리온/>}/>
                <Route path = '/clubDetail_하랑' element={<하랑/>}/>
                <Route path = '/clubDetail_헤르츠' element={<헤르츠/>}/>
                <Route path = '/clubDetail_우나' element={<우나/>}/>
                <Route path = '/clubDetail_VarlaEdibleInsectClub' element={<VarlaEdibleInsectClub/>}/>
                <Route path = '/clubDetail_츄러스' element={<츄러스/>}/>
                <Route path = '/clubDetail_Sapiens' element={<Sapiens/>}/>
                <Route path = '/clubDetail_꼬망세' element={<꼬망세/>}/>
                <Route path = '/clubDetail_Amaranthplus' element={<Amaranthplus/>}/>
                <Route path = '/clubDetail_bio_psychologyhonors' element={<bio_psychologyhonors/>}/>
                <Route path = '/clubDetail_EYE' element={<EYE/>}/>
                <Route path = '/clubDetail_벨아르떼' element={<벨아르떼/>}/>
                <Route path = '/clubDetail_SCAH' element={<SCAH/>}/>
                <Route path = '/clubDetail_SUIS' element={<SUIS/>}/>
                <Route path = '/clubDetail_TIME' element={<TIME/>}/>
                <Route path = '/clubDetail_물소리바람소리' element={<물소리바람소리/>}/>
                <Route path = '/clubDetail_구텐탁구' element={<구텐탁구/>}/>
                <Route path = '/clubDetail_데라' element={<데라/>}/>
                <Route path = '/clubDetail_키마' element={<키마/>}/>
                <Route path = '/clubDetail_치즈' element={<치즈/>}/>
                <Route path = '/clubDetail_홍보대사' element={<홍보대사/>}/>
                <Route path = '/clubDetail_Habitat' element={<Habitat/>}/>
                <Route path = '/clubDetail_ACTS' element={<ACTS/>}/>
            </Routes>
        </Router>
        
    </div>
  );
}

export default App;
