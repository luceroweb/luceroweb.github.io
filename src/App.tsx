import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Theme/Header";
import Footer from "./Components/Theme/Footer";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import Portfolio from "./Components/Portfolio";
import RemoteLive from "./Components/Portfolio/RemoteLive";
import Aventage from "./Components/Portfolio/Aventage";
import UnitedSecurityBank from "./Components/Portfolio/UnitedSecurityBank";
import Smittcamp from "./Components/Portfolio/Smittcamp";
import Contact from "./Components/Contact";
import Proficiencies from "./Components/Proficiencies";
import { Container } from "react-bootstrap";
import SAFE from "./Components/Portfolio/StraightAdvocatesForEquality";

function App() {
  return (
    <Container>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/proficiencies" element={<Proficiencies />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/remotelive" element={<RemoteLive />} />
          <Route path="/portfolio/aventage" element={<Aventage />} />
          <Route
            path="/portfolio/unitedsecuritybank"
            element={<UnitedSecurityBank />}
          />
          <Route path="/portfolio/smittcamp" element={<Smittcamp />} />
          <Route
            path="/portfolio/straightadvocatesforequality"
            element={<SAFE />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Container>
  );
}

export default App;
