import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Theme/Header";
import Footer from "./Components/Theme/Footer";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Proficiencies from "./Components/Proficiencies";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/proficiencies" element={<Proficiencies />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Container>
  );
}

export default App;
