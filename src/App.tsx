import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Theme/Header";
import Footer from "./Components/Theme/Footer";
import Home from "./Components/Home";
import Experience from "./Components/Experience";
import Portfolio from "./Components/Portfolio";
import Karot from "./Components/Portfolio/Karot";
import TriviaChill from "./Components/Portfolio/Trivia&Chill";
import HauntedHouse from "./Components/Portfolio/HauntedHouse";
import WPPlugin from "./Components/Portfolio/ContentAdWordPressPlugin";
import JSWidgets from "./Components/Portfolio/ContentAdWidgets";
import RemoteLive from "./Components/Portfolio/RemoteLive";
import Aventage from "./Components/Portfolio/Aventage";
import UnitedSecurityBank from "./Components/Portfolio/UnitedSecurityBank";
import Smittcamp from "./Components/Portfolio/Smittcamp";
import MeetInTheMiddle4Equality from "./Components/Portfolio/MeetInTheMiddle4Equality";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import { Container } from "react-bootstrap";
import SAFE from "./Components/Portfolio/StraightAdvocatesForEquality";

function App() {
  return (
    <>
      <Container>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/karotsavingsmart" element={<Karot />} />
            <Route path="/portfolio/triviachill" element={<TriviaChill />} />
            <Route
              path="/portfolio/hauntedhousegame"
              element={<HauntedHouse />}
            />
            <Route path="/portfolio/wordpressplugin" element={<WPPlugin />} />
            <Route
              path="/portfolio/javascriptadwidgets"
              element={<JSWidgets />}
            />
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
            <Route
              path="/portfolio/meetinthemiddle4equality"
              element={<MeetInTheMiddle4Equality />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default App;
