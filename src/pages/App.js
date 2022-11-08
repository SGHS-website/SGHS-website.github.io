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
import clubDetail_ARTBEAT from './clubDetail자율/clubDetail_ARTBEAT';
import clubDetail_Bloomsbury from './clubDetail자율/clubDetail_Bloomsbury';
import clubDetail_DECA from './clubDetail자율/clubDetail_DECA';
import clubDetail_InterView from './clubDetail자율/clubDetail_InterView';
import clubDetail_Sherlockplus from './clubDetail자율/clubDetail_Sherlockplus';
import clubDetail_단비 from './clubDetail자율/clubDetail_단비';
import clubDetail_디벨로퍼스 from './clubDetail자율/clubDetail_디벨로퍼스';
import clubDetail_베르데 from './clubDetail자율/clubDetail_베르데';
import clubDetail_에렌시아 from './clubDetail자율/clubDetail_에렌시아';
import clubDetail_포텐시아 from './clubDetail자율/clubDetail_포텐시아';
import clubDetail_프시케 from './clubDetail자율/clubDetail_프시케';
import clubDetail_피그말리온 from './clubDetail자율/clubDetail_피그말리온';
import clubDetail_하랑 from './clubDetail자율/clubDetail_하랑';
import clubDetail_헤르츠 from './clubDetail자율/clubDetail_헤르츠';
import clubDetail_우나 from './clubDetail자율/clubDetail_우나';
import clubDetail_VarlaEdibleInsectClub from './clubDetail자율/clubDetail_VarlaEdibleInsectClub';
import clubDetail_츄러스 from './clubDetail자율/clubDetail_츄러스';
import clubDetail_Sapiens from './clubDetail자율/clubDetail_Sapiens';
import clubDetail_꼬망세 from './clubDetail자율/clubDetail_꼬망세';
import clubDetail_Amaranthplus from './clubDetail자율/clubDetail_Amaranthplus';
import clubDetail_bio_psychologyhonors from './clubDetail자율/clubDetail_bio_psychologyhonors';
import clubDetail_EYE from './clubDetail자율/clubDetail_EYE';
import clubDetail_벨아르떼 from './clubDetail자율/clubDetail_벨아르떼';
import clubDetail_SCAH from './clubDetail자율/clubDetail_SCAH';
import clubDetail_SUIS from './clubDetail자율/clubDetail_SUIS';
import clubDetail_TIME from './clubDetail자율/clubDetail_TIME';
import clubDetail_물소리바람소리 from './clubDetail자율/clubDetail_물소리바람소리';
import clubDetail_구텐탁구 from './clubDetail자율/clubDetail_구텐탁구';
import clubDetail_데라 from './clubDetail자율/clubDetail_데라';
import clubDetail_키마 from './clubDetail자율/clubDetail_키마';
import clubDetail_치즈 from './clubDetail자율/clubDetail_치즈';
import clubDetail_Habitat from './clubDetail자율/clubDetail_Habitat';
import clubDetail_홍보대사 from './clubDetail자율/clubDetail_홍보대사';
import clubDetail_ACTS from './clubDetail자율/clubDetail_ACTS';
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
                <Route path = '/clubDetail_ARTBEAT' element={<clubDetail_ARTBEAT/>}/>
                <Route path = '/clubDetail_Bloomsbury' element={<clubDetail_Bloomsbury/>}/>
                <Route path = '/clubDetail_DECA' element={<clubDetail_DECA/>}/>
                <Route path = '/clubDetail_단비' element={<clubDetail_단비/>}/>
                <Route path = '/clubDetail_디벨로퍼스' element={<clubDetail_디벨로퍼스/>}/>
                <Route path = '/clubDetail_베르데' element={<clubDetail_베르데/>}/>
                <Route path = '/clubDetail_에렌시아' element={<clubDetail_에렌시아/>}/>
                <Route path = '/clubDetail_포텐시아' element={<clubDetail_포텐시아/>}/>
                <Route path = '/clubDetail_프시케' element={<clubDetail_프시케/>}/>
                <Route path = '/clubDetail_피그말리온' element={<clubDetail_피그말리온/>}/>
                <Route path = '/clubDetail_하랑' element={<clubDetail_하랑/>}/>
                <Route path = '/clubDetail_헤르츠' element={<clubDetail_헤르츠/>}/>
                <Route path = '/clubDetail_우나' element={<clubDetail_우나/>}/>
                <Route path = '/clubDetail_VarlaEdibleInsectClub' element={<clubDetail_VarlaEdibleInsectClub/>}/>
                <Route path = '/clubDetail_츄러스' element={<clubDetail_츄러스/>}/>
                <Route path = '/clubDetail_Sapiens' element={<clubDetail_Sapiens/>}/>
                <Route path = '/clubDetail_꼬망세' element={<clubDetail_꼬망세/>}/>
                <Route path = '/clubDetail_Amaranthplus' element={<clubDetail_Amaranthplus/>}/>
                <Route path = '/clubDetail_bio_psychologyhonors' element={<clubDetail_bio_psychologyhonors/>}/>
                <Route path = '/clubDetail_EYE' element={<clubDetail_EYE/>}/>
                <Route path = '/clubDetail_벨아르떼' element={<clubDetail_벨아르떼/>}/>
                <Route path = '/clubDetail_SCAH' element={<clubDetail_SCAH/>}/>
                <Route path = '/clubDetail_SUIS' element={<clubDetail_SUIS/>}/>
                <Route path = '/clubDetail_TIME' element={<clubDetail_TIME/>}/>
                <Route path = '/clubDetail_물소리바람소리' element={<clubDetail_물소리바람소리/>}/>
                <Route path = '/clubDetail_구텐탁구' element={<clubDetail_구텐탁구/>}/>
                <Route path = '/clubDetail_데라' element={<clubDetail_데라/>}/>
                <Route path = '/clubDetail_키마' element={<clubDetail_키마/>}/>
                <Route path = '/clubDetail_치즈' element={<clubDetail_치즈/>}/>
                <Route path = '/clubDetail_홍보대사' element={<clubDetail_홍보대사/>}/>
                <Route path = '/clubDetail_Habitat' element={<clubDetail_Habitat/>}/>
                <Route path = '/clubDetail_ACTS' element={<clubDetail_ACTS/>}/>
            </Routes>
        </Router>
        
    </div>
  );
}

export default App;
