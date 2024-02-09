import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="mb-3">
      <Navbar variant="dark" fixed="top" expand="md" expanded={expanded}>
        <Container>
          <Link
            to="/"
            className="text-decoration-none"
            onClick={() => setExpanded(false)}
          >
            <Navbar.Brand>
              <strong>Juan</strong> Lucero
            </Navbar.Brand>
          </Link>
          <Navbar.Brand className="fw-light d-none d-sm-block">
            senior web dev
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="align-items-end">
              <Link
                to="/experience"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Experience
              </Link>
              <Link
                to="/portfolio"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/skills"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Skills
              </Link>
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
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
