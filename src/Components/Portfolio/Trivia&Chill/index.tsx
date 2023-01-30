import React from "react";
import { Row, Col, Carousel, Button } from "react-bootstrap";
import tc0title from "./tc0title.png";
import tc1Intro from "./tc1start.png";
import tc2Question from "./tc2question.png";
import tc3Correct from "./tc3trailer.png";
import tc4GameOver from "./tc4gameover.png";

const TriviaChill = () => {
  return (
    <Row>
      <Col xs={12}>
        <h1>Trivia &amp; Chill</h1>
        <p>
          <strong>Status:</strong> Live
        </p>
        <p>
          <strong>Technologies:</strong> React,Redux, Axios, HTML, CSS
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
              <img className="d-block w-100" src={tc0title} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={tc1Intro} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={tc2Question} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={tc3Correct} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={tc4GameOver} alt="" />
            </Carousel.Item>
          </Carousel>
          <p>
            <small>
              <strong>Side 1:</strong> Game Title &amp; Credits
            </small>
          </p>
          <p>
            <small>
              <strong>Slides 2:</strong> Game intro screen
            </small>
          </p>
          <p>
            <small>
              <strong>Slides 3:</strong> Movie trivia question screen
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
          My apprentices dug deeper into application development practices with
          our movie trivia project titled "Trivia & Chill".
        </p>
        <h3>Teaching Objectives</h3>
        <ul>
          <li>Reenforce Agile group development and collaboration processes</li>
          <li>Build a game for iOS, Android, and web</li>
          <li>Axios for API access</li>
          <li>Use the Redux store to pass data between React components</li>
        </ul>
        <h3>Deliverables</h3>
        <p>
          All deliverables were co-authored by members of the apprenticeship.
        </p>
        <ul>
          <li>
            <a
              href="https://luceroweb.github.io/trivia-and-chill/"
              rel="noreferrer"
              target="_blank"
            >
              Trivua &amp; Chill Game
            </a>{" "}
            (completed project)
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1mymnCxgVQ-NuyoU1RGakEvwQPsBN8iLmg76hwVLaVHc/edit?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              Simplified Agile Epic Document
            </a>
          </li>
          <li>
            <a
              href="https://github.com/luceroweb/trivia-and-chill/projects/1"
              rel="noreferrer"
              target="_blank"
            >
              Project Board
            </a>
          </li>
          <li>
            <a
              href="https://github.com/luceroweb/trivia-and-chill"
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

export default TriviaChill;
