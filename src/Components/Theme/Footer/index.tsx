import React from "react";
import { Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
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
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://drive.google.com/file/d/1vtnCZfCtNnSOT1nFXd_WWVPRjaHRHmDS/view"
                target="_blank"
              >
                <i className="bi bi-filetype-pdf"></i> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://github.com/luceroweb" target="_blank">
                <i className="bi bi-github"></i> GitHub
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
