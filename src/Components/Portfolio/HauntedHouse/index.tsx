import React from "react";
import { Row, Col, Carousel, Button } from "react-bootstrap";
import hh1Intro from "./hh1intro.png";
import hh2Room from "./hh2room.png";
import hh3Correct from "./hh3correct.png";
import hh4GameOver from "./hh4gameover.png";
import hh5GoldKey from "./hh5goldkey.png";
import hh6YouWin from "./hh6youwin.png";

const HauntedHouse = () => {
  return (
    <Row>
      <Col xs={12}>
        <h1>Haunted House Game</h1>
        <p>
          <strong>Status:</strong> Live
        </p>
        <p>
          <strong>Technologies:</strong> React, HTML5, CSS3, audio/video
        </p>

        <p>
          <a
            href="https://luceroweb.github.io/haunted-house-game"
            rel="noreferrer"
            target="_blank"
            className="m-2"
          >
            <Button>App</Button>
          </a>
          <a
            href="https://github.com/luceroweb/haunted-house-game"
            rel="noreferrer"
            target="_blank"
            className="m-2"
          >
            <Button>
              <i className="bi bi-github"></i> Code
            </Button>
          </a>
        </p>
        <div style={{ maxWidth: "700px" }} className="mb-3">
          <Carousel fade variant="light" className="mb-3">
            <Carousel.Item>
              <img className="d-block w-100" src={hh1Intro} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hh2Room} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hh3Correct} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hh4GameOver} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hh5GoldKey} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={hh6YouWin} alt="" />
            </Carousel.Item>
          </Carousel>
          <p>
            <small>
              <strong>Side 1:</strong> Game introduction sequence
            </small>
          </p>
          <p>
            <small>
              <strong>Slides 2:</strong> Exploring a room in the house
            </small>
          </p>
          <p>
            <small>
              <strong>Slides 3:</strong> Reponding to a challenge correctly
            </small>
          </p>
          <p>
            <small>
              <strong>Slides 4:</strong> Game Over screen
            </small>
          </p>
          <p>
            <small>
              <strong>Slides 5:</strong> You found the gold key
            </small>
          </p>
          <p>
            <small>
              <strong>Slides 6:</strong> You Win screen
            </small>
          </p>
        </div>
        <p>
          My apprenticeship's first big project was a choose your own adventure
          style Haunted House Game.
        </p>
        <h3>Teaching Objectives</h3>
        <ul>
          <li>React group project using Git</li>
          <li>
            Leadership Roles: several subject matter experts assigned to
            build/guide product features
          </li>
          <li>Introduce Agile group development strategies</li>
          <li>
            Collaborated with QA to introduce QA processes and apprenticeship
            collaboration
          </li>
          <li>
            Introduction to Agile Epics and technical writing
            <ul>
              <li>Epic story writing</li>
              <li>Break down into features</li>
              <li>Full team collaboration to write user stories</li>
            </ul>
          </li>
        </ul>
        <h3>Deliverables</h3>
        <p>
          All deliverables were co-authored by members of the apprenticeship.
        </p>
        <ul>
          <li>
            <a
              href="https://luceroweb.github.io/haunted-house-game/"
              rel="noreferrer"
              target="_blank"
            >
              The Haunted House Game
            </a>{" "}
            (completed project)
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/17xd39N41pTZZt901gDRrOdBrDnGPXLMFYBbVdEzZw3c/edit?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              Simplified Agile Epic Document
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1qj_KV0BNGOIXaDp-BJYQU-UQOBL7umlrlv5r7zcq4Xw/edit?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              Stories & Events
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1BlbVZ-1aPRTdC5amrG7JteeZfCjNy6Bgmm7RWlF9RyI/edit?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              Master Script
            </a>
          </li>
          <li>
            <a
              href="https://github.com/users/luceroweb/projects/1"
              rel="noreferrer"
              target="_blank"
            >
              Project Board
            </a>
          </li>
          <li>
            <a
              href="https://github.com/luceroweb/haunted-house-game"
              rel="noreferrer"
              target="_blank"
            >
              GitHub code repository
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default HauntedHouse;
