import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import remotelive from "./RemoteLive/remotelive_thumb.jpg";
import aventage from "./Aventage/aventage_thumb.jpg";
import usb from "./UnitedSecurityBank/usb_thumb.jpg";
import smittcamp from "./Smittcamp/smittcamp_thumb.jpg";
import safe from "./StraightAdvocatesForEquality/layout_thumb.jpg";
import meetinthemiddle from "./MeetInTheMiddle4Equality/meetinthemiddle_thumb.jpg";
import karot from "./Karot/karot1login.png";
import triviachill from "./Trivia&Chill/tc0title.png";
import hauntedhouse from "./HauntedHouse/hh1intro.png";

const Portfolio = () => {
  return (
    <Row>
      <Col xs={12}>
        <h1>Portfolio</h1>
      </Col>
      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Img variant="top" src={karot} alt="Karot: Saving Smart" />
          <Card.Body>
            <Card.Title>Karot: Saving Smart.</Card.Title>
            <Card.Text>An envelope savings app</Card.Text>
            <Card.Text>
              <small>Firebase, React-Native, HTML5, CSS3</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a
              href="https://karot-saving-smart.netlify.app/"
              rel="noreferrer"
              target="_blank"
              className="m-1"
            >
              <Button>App</Button>
            </a>
            <a
              href="https://github.com/luceroweb/karot-saving-smart"
              rel="noreferrer"
              target="_blank"
              className="m-1"
            >
              <Button>
                <i className="bi bi-github"></i> Code
              </Button>
            </a>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Img variant="top" src={triviachill} alt="Trivia & Chill" />
          <Card.Body>
            <Card.Title>Trivia & Chill</Card.Title>
            <Card.Text>Movie Trivia Game</Card.Text>
            <Card.Text>
              <small>React, Axios, HTML5, CSS3</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a
              href="https://luceroweb.github.io/trivia-and-chill/"
              rel="noreferrer"
              target="_blank"
              className="m-1"
            >
              <Button>App</Button>
            </a>
            <a
              href="https://github.com/luceroweb/trivia-and-chill"
              rel="noreferrer"
              target="_blank"
              className="m-1"
            >
              <Button>
                <i className="bi bi-github"></i> Code
              </Button>
            </a>
            <Link to="/portfolio/triviachill" className="m-1">
              <Button>Details</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Img variant="top" src={hauntedhouse} alt="Haunted House Game" />
          <Card.Body>
            <Card.Title>Haunted House Game</Card.Title>
            <Card.Text>Choose your own adventure game.</Card.Text>
            <Card.Text>
              <small>React, HTML5, CSS3</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <a
              href="https://luceroweb.github.io/haunted-house-game"
              rel="noreferrer"
              target="_blank"
              className="m-1"
            >
              <Button>App</Button>
            </a>
            <a
              href="https://github.com/luceroweb/haunted-house-game"
              rel="noreferrer"
              target="_blank"
              className="m-1"
            >
              <Button>
                <i className="bi bi-github"></i> Code
              </Button>
            </a>
            <Link to="/portfolio/hauntedhousegame" className="m-1">
              <Button>Details</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Link to="/portfolio/remotelive">
            <Card.Img variant="top" src={remotelive} alt="RemoteLive" />
          </Link>
          <Card.Body>
            <Card.Title>RemoteLive</Card.Title>
            <Card.Text>Your Disklavier plays along</Card.Text>
            <Card.Text>
              <small>ASP, HTML, CSS, jQuery</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/portfolio/remotelive">
              <Button>Details</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Link to="/portfolio/aventage">
            <Card.Img variant="top" src={aventage} alt="AVENTAGE" />
          </Link>
          <Card.Body>
            <Card.Title>AVENTAGE</Card.Title>
            <Card.Text>Yamaha Receivers</Card.Text>
            <Card.Text>
              <small>Flash, HTML5, jQuery</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/portfolio/aventage">
              <Button>Details</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Link to="/portfolio/unitedsecuritybank">
            <Card.Img variant="top" src={usb} alt="United Security Bank" />
          </Link>
          <Card.Body>
            <Card.Title>United Security Bank</Card.Title>
            <Card.Text>WordPress marketing site</Card.Text>
            <Card.Text>
              <small>Joomla CMS, PHP, SQL, HTML, CSS</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/portfolio/unitedsecuritybank">
              <Button>Details</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Link to="/portfolio/straightadvocatesforequality">
            <Card.Img
              variant="top"
              src={safe}
              alt="SAFE: Straight Advocates for Equality"
            />
          </Link>
          <Card.Body>
            <Card.Title>SAFE:</Card.Title>
            <Card.Text>Straight Advocates for Equality</Card.Text>
            <Card.Text>
              <small>WordPress, PHP, MySQL, HTML, CSS, jQuery</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/portfolio/straightadvocatesforequality">
              <Button>Details</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Link to="/portfolio/meetinthemiddle4equality">
            <Card.Img
              variant="top"
              src={meetinthemiddle}
              alt="Meet in the Middle 4 Equality"
            />
          </Link>
          <Card.Body>
            <Card.Title>Meet in the Middle 4 Equality</Card.Title>
            <Card.Text>
              <small>Joomla, Flash, PHP, SQL, HTML, CSS, jQuery</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/portfolio/meetinthemiddle4equality">
              <Button>Details</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Img
            variant="top"
            src={smittcamp}
            alt="Smittcamp Family Honors College"
          />
          <Card.Body>
            <Card.Title>Smittcamp Family:</Card.Title>
            <Card.Text>CSU, Fresno Honors College</Card.Text>
            <Card.Text>
              <small>Flash, Adobe Contribute, HTML, CSS, jQuery</small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to="/portfolio/smittcamp">
              <Button>Details</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

export default Portfolio;
