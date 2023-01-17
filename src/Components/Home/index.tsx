import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import face from "../../images/face.jpg";

const Home = () => {
  return (
    <Row>
      <Col sm={6} md={4} className="mb-3 mb-md-0 text-center">
        <img src={face} alt="" className="profile rounded" />
      </Col>
      <Col sm={6} md={8}>
        <h1 className="fs-5">
          22 years moving user focused businesses forward
        </h1>
        <p>
          I enjoy building collaborative team projects, because happy teams work
          harder, faster, and take pride in their work. Customers will see the
          work and say "That's just what I wanted". Happy customers make happy
          clients, who come back again and again. Invite me to do this for you.
        </p>
        <div className="text-center">
          <Link to="/contact" className="m-2">
            <Button>Contact</Button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1vtnCZfCtNnSOT1nFXd_WWVPRjaHRHmDS/view?usp=share_link"
            rel="noreferrer"
            target="_blank"
            className="m-2"
          >
            <Button variant="outline-secondary">
              Resume <i className="bi bi-filetype-pdf"></i>
            </Button>
          </a>
          <a
            href="https://github.com/luceroweb"
            rel="noreferrer"
            target="_blank"
            className="m-2"
          >
            <Button variant="outline-secondary">
              GitHub <i className="bi bi-github"></i>
            </Button>
          </a>
        </div>
      </Col>
    </Row>
  );
};

export default Home;
