import React from "react";
import { Row, Col, Carousel, Button } from "react-bootstrap";
import karot1login from "./karot1login.png";
import karot2budget from "./karot2budget.png";

const Karot = () => {
  return (
    <Row>
      <Col xs={12}>
        <h1>Karot: Saving Smart</h1>
        <p>
          <strong>Status:</strong> MVP Live
        </p>
        <p>
          <strong>Technologies:</strong> Firebase, React-Native, Redux,
          TypeScript, Axios, HTML, CSS
        </p>

        <p>
          <a
            href="https://karot-saving-smart.netlify.app/"
            rel="noreferrer"
            target="_blank"
            className="m-2"
          >
            <Button>App</Button>
          </a>
          <a
            href="https://github.com/luceroweb/karot-saving-smart"
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
              <img className="d-block w-100" src={karot1login} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={karot2budget} alt="" />
            </Carousel.Item>
          </Carousel>
          <p>
            <small>
              <strong>Side 1:</strong> App Login screen using Firebase for
              Google login.
            </small>
          </p>
          <p>
            <small>
              <strong>Slides 2:</strong> Budget screen that allows the user to
              input their account balances, and upcoming bills to deterimine how
              much "Extra Money" they'll have after all their bills are paid.
            </small>
          </p>
        </div>
        <p>
          A collaoration with the WordPress and Design apprenticeships to get a
          feel for how to build a complex app in a collaborative environment
          utilizing deverse skill sets.
        </p>
        <h3>Teaching Objectives</h3>
        <ul>
          <li>
            Build a tool that helps apprentices save for the future while paying
            bills today
          </li>
          <li>Reinforce Agile group programming skills</li>
          <li>Enforce pull request best practices</li>
          <li>
            Collaborated with Design and WordPress apprenticeships to reinforce
            apprenticeship collaboration
          </li>
          <li>Build a React-Native app for iOS, Android, and web</li>
          <li>Conform to design standards provided by Design apprenticeship</li>
          <li>Use the Redux store to pass data between React components</li>
        </ul>
        <h3>PoC Deliverables</h3>
        <p>
          All Proof of Concept (PoC) deliverables were co-authored by members of
          the React-Native, Design, and WordPress apprenticeships.
        </p>
        <ul>
          <li>
            <a
              href="https://docs.google.com/document/d/1gfqy4w9pNtnj7DmIRpZf70kZ9IWK8oM6v4XO1USwp8s/"
              rel="noreferrer"
              target="_blank"
            >
              Envelope App Notes
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1qBBnfX1b_O8dEh0NR3HWKO1QYOp0ijYCzNjPzKjHVRI/"
              rel="noreferrer"
              target="_blank"
            >
              Envelope App PoC Epic
            </a>
          </li>
          <li>
            <a
              href="https://github.com/luceroweb/karot-saving-smart/projects/1"
              rel="noreferrer"
              target="_blank"
            >
              GitHub Project Board
            </a>
          </li>
          <li>
            <a
              href="https://github.com/luceroweb/karot-saving-smart"
              rel="noreferrer"
              target="_blank"
            >
              GitHub Code Repository
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/file/qgAYJmI9jnoocgKRfWarpb/Envelope-App?node-id=484%3A14368"
              rel="noreferrer"
              target="_blank"
            >
              Figma Design File
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1m3q9uYLqQH6RFBl1KeHFTNoFu_y8FvMBRGfAYkepG0I/"
              rel="noreferrer"
              target="_blank"
            >
              Karot App - Reusable Component Audit
            </a>
          </li>
        </ul>
        <h3>MVC Deliverables</h3>
        <p>
          All Minimum Viable Product (MVC) deliverables were co-authored by
          members of the React-Native, and WordPress apprenticeships.
        </p>
        <ul>
          <li>
            <a
              href="https://docs.google.com/document/d/1luW0c2yLwCH2uVXx8vaxodAndqI0S8_IaD0jatNFu80/"
              rel="noreferrer"
              target="_blank"
            >
              App MVP Epic
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1oe8X4x1JqOFTWngmNyIzuCd3WlJ_RkdgJstfC36PVMY/"
              rel="noreferrer"
              target="_blank"
            >
              WordPress Marketing Site: Scope of Work
            </a>
          </li>
          <li>
            <a
              href="https://docs.google.com/document/d/1EylBJ0FqIkZekgqpEHBcRHTedZ9hHXfZ3_5ZH7Aj1gk/"
              rel="noreferrer"
              target="_blank"
            >
              React-Native App: MVP Scope of Work
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default Karot;
