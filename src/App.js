import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Home from './Components/Home';
import CareerDevelopment from './Components/CareerDevelopment';
import Portfolio from './Components/Portfolio';
import Proficiencies from './Components/Proficiencies';
import Education from './Components/Education';
import Contact from './Components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('Profile');

  return (
    <div className="App">
      <HashRouter>
        <div className="container">

          <div className="row g-lg-0">

            <div className="col-lg-4">
              
              <Nav
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />

            </div>

            <div className="col-lg-8">

              <div className="bg-white m-3 p-3 border rounded-3 clearfix">

                  <Routes>
                    <Route exact activeClassName="active" path='/' element={
                      <Home />
                    } />
                    <Route exact activeClassName="active" path='/career-development' element={
                      <CareerDevelopment />
                    } />
                    <Route exact activeClassName="active" path='/portfolio' element={
                      <Portfolio />
                    } />
                    <Route exact activeClassName="active" path='/proficiencies' element={
                      <Proficiencies />
                    } />
                    <Route exact activeClassName="active" path='/education' element={
                      <Education />
                    } />
                    <Route exact activeClassName="active" path='/contact' element={
                      <Contact />
                    } />
                  </Routes>

              </div>

            </div>
          </div>

          <Footer
            setCurrentPage={setCurrentPage}
          />

        </div>
      </HashRouter>

    </div>
  );
}

export default App;
