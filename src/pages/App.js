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
function App() {
  return (
    <div className="App">
        <Router>
            <Navigationbar />
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='/club' element={<Club />}/>
                <Route path='/event' element={<Event />}/>
                <Route path='/aboutUs' element={<AboutUs />}/>
                <Route path='/student' element={<Student />}/>
                <Route path='/faq' element={<Faq />}/>
                <Route path = '/eventde' element={<Eventde/>}/>
                <Route path = '/clubDetail' element={<ClubDetail/>}/>
            </Routes>
        </Router>
        
    </div>
  );
}

export default App;
