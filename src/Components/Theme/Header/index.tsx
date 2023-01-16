import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-3">
      <Navbar bg="success" variant="dark" fixed="top" expand="md">
        <Container>
          <Navbar.Brand href="#home" className="fs-4">
            <strong>Juan</strong> Lucero
          </Navbar.Brand>
          <Navbar.Brand>
            <small className="fs-6 fw-bold d-none d-sm-block">
              SENIOR WEB DEVELOPER
            </small>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="align-items-end">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/experience" className="nav-link">
                Experience
              </Link>
              <Link to="/portfolio" className="nav-link">
                Portfolio
              </Link>
              <Link to="/proficiencies" className="nav-link">
                Proficiencies
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
