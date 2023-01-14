import React from "react";
import face from "./images/face.jpg";
import "./App.css";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <Container>
      <header className="mb-3">
        <Navbar bg="success" variant="dark" fixed="top" expand="md">
          <Container>
            <Navbar.Brand href="#home" className="fs-4">
              <strong>Juan</strong> Lucero
            </Navbar.Brand>
            <Navbar.Brand>
              <small className="fs-6 fw-bold">SENIOR WEB DEVELOPER</small>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="align-items-end">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="https://github.com/luceroweb">
                  GitHub <i className="bi bi-github"></i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <img src={face} alt="" />
          </Col>
          <Col md={6}>
            <h1 className="fs-5">
              22 years moving user focused businesses forward
            </h1>
            <p>
              For the past 22 years, I've enjoyed building collaborative team
              projects that put your users first. If your user thinks "what's
              this for?" then the job isn't done yet. Happy users come back to
              your business again and again; happy teams work harder, faster,
              and take pride in their work. Invite me to do this for your
              business.
            </p>
          </Col>
        </Row>
      </main>
      <footer>
        <Row className="mt-3">
          <Col>
            <Nav
              className="justify-content-center position-fixed bottom-0 w-100 bg-light"
              activeKey="/home"
            >
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Fresno, CA
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="./contact">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="https://github.com/luceroweb">
                  <i className="bi bi-github"></i> GitHubnk
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </footer>
    </Container>
  );
}

export default App;
