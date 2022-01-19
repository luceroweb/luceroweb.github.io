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
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('/');

  return (
    <div className="App">
      <HashRouter>
        <div className="container">

          <div className="row g-lg-0">

            <div className="col-lg-4">
              
              <Nav
                currentPage
                setCurrentPage
              />

            </div>

            <div className="col-lg-8">

              <div className="bg-white m-3 p-3 border rounded-3 clearfix">

                  <Routes>
                    <Route exact path='/' element={
                      <Home />
                    } />
                    <Route exact path='/career-development' element={
                      <CareerDevelopment />
                    } />
                    <Route exact path='/portfolio' element={
                      <Portfolio />
                    } />
                    <Route exact path='/proficiencies' element={
                      <Proficiencies />
                    } />
                    <Route exact path='/education' element={
                      <Education />
                    } />
                    <Route exact path='/contact' element={
                      <Contact />
                    } />
                  </Routes>

              </div>

            </div>
          </div>

          <Footer />

        </div>
      </HashRouter>

    </div>
  );
}

export default App;
