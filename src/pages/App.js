import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Club from './Club';
import Event from './Event';
import Competition from './Competition';
import Student from './Student';
import Faq from './Faq';
import Post from './Post';

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
                <Route path='/competition' element={<Competition />}/>
                <Route path='/student' element={<Student />}/>
                <Route path='/faq' element={<Faq />}/>
                <Route path='/post' element={<Post />}/>
            </Routes>
            
        </Router>
    </div>
  );
}

export default App;
