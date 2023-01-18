import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-3">
      <Navbar variant="dark" fixed="top" expand="md">
        <Container>
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand>
              <strong>Juan</strong> Lucero
            </Navbar.Brand>
          </Link>
          <Navbar.Brand className="fw-light d-none d-sm-block">
            senior web dev
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="align-items-end">
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
