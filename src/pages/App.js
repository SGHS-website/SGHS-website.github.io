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
import Danbi from './clubDetail자율/clubDetail_Danbi';
import Developers from './clubDetail자율/clubDetail_Developers';
import Verde from './clubDetail자율/clubDetail_Verde';
import Herencia from './clubDetail자율/clubDetail_Herencia';
import Potencia from './clubDetail자율/clubDetail_Potencia';
import Psyche from './clubDetail자율/clubDetail_Psyche';
import Pygmalion from './clubDetail자율/clubDetail_Pygmalion';
import Harang from './clubDetail자율/clubDetail_Harang';
import Hertz from './clubDetail자율/clubDetail_Hertz';
import Una from './clubDetail자율/clubDetail_Una';
import VarlaEdibleInsectClub from './clubDetail자율/clubDetail_VarlaEdibleInsectClub';
import Churros from './clubDetail자율/clubDetail_Churros';
import Sapiens from './clubDetail자율/clubDetail_Sapiens';
import Commencer from './clubDetail자율/clubDetail_Commencer';
import Amaranthplus from './clubDetail자율/clubDetail_Amaranthplus';
import bio_psychologyhonors from './clubDetail자율/clubDetail_bio_psychologyhonors';
import EYE from './clubDetail자율/clubDetail_EYE';
import BellArte from './clubDetail자율/clubDetail_BellArte';
import SCAH from './clubDetail자율/clubDetail_SCAH';
import SUIS from './clubDetail자율/clubDetail_SUIS';
import TIME from './clubDetail자율/clubDetail_TIME';
import Mullsoribaramsori from './clubDetail자율/clubDetail_Mullsoribaramsori';
import Gutentakgu from './clubDetail자율/clubDetail_Gutentakgu';
import Dera from './clubDetail자율/clubDetail_Dera';
import Kyma from './clubDetail자율/clubDetail_Kyma';
import Cheese from './clubDetail자율/clubDetail_Cheese';
import Habitat from './clubDetail자율/clubDetail_Habitat';
import Hongbodaesa from './clubDetail자율/clubDetail_Hongbodaesa';
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
                <Route path = '/clubDetail_단비' element={<Danbi/>}/>
                <Route path = '/clubDetail_디벨로퍼스' element={<Developers/>}/>
                <Route path = '/clubDetail_베르데' element={<Verde/>}/>
                <Route path = '/clubDetail_에렌시아' element={<Herencia/>}/>
                <Route path = '/clubDetail_포텐시아' element={<Potencia/>}/>
                <Route path = '/clubDetail_프시케' element={<Psyche/>}/>
                <Route path = '/clubDetail_피그말리온' element={<Pygmalion/>}/>
                <Route path = '/clubDetail_하랑' element={<Harang/>}/>
                <Route path = '/clubDetail_헤르츠' element={<Hertz/>}/>
                <Route path = '/clubDetail_우나' element={<Una/>}/>
                <Route path = '/clubDetail_VarlaEdibleInsectClub' element={<VarlaEdibleInsectClub/>}/>
                <Route path = '/clubDetail_츄러스' element={<Churros/>}/>
                <Route path = '/clubDetail_Sapiens' element={<Sapiens/>}/>
                <Route path = '/clubDetail_꼬망세' element={<Commencer/>}/>
                <Route path = '/clubDetail_Amaranthplus' element={<Amaranthplus/>}/>
                <Route path = '/clubDetail_bio_psychologyhonors' element={<bio_psychologyhonors/>}/>
                <Route path = '/clubDetail_EYE' element={<EYE/>}/>
                <Route path = '/clubDetail_벨아르떼' element={<BellArte/>}/>
                <Route path = '/clubDetail_SCAH' element={<SCAH/>}/>
                <Route path = '/clubDetail_SUIS' element={<SUIS/>}/>
                <Route path = '/clubDetail_TIME' element={<TIME/>}/>
                <Route path = '/clubDetail_물소리바람소리' element={<Mullsoribaramsori/>}/>
                <Route path = '/clubDetail_구텐탁구' element={<Gutentakgu/>}/>
                <Route path = '/clubDetail_데라' element={<Dera/>}/>
                <Route path = '/clubDetail_키마' element={<Kyma/>}/>
                <Route path = '/clubDetail_치즈' element={<Cheese/>}/>
                <Route path = '/clubDetail_홍보대사' element={<Hongbodaesa/>}/>
                <Route path = '/clubDetail_Habitat' element={<Habitat/>}/>
                <Route path = '/clubDetail_ACTS' element={<ACTS/>}/>
            </Routes>
        </Router>
        
    </div>
  );
}

export default App;
