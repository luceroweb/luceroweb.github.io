import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import face from "../../images/face.jpg";

const Home = () => {
  return (
    <Row>
      <Col sm={6} md={4} className="mb-3 mb-md-0 text-center">
        <img src={face} alt="" className="profile" />
      </Col>
      <Col sm={6} md={8}>
        <h1 className="fs-5">
          22 years moving user focused businesses forward
        </h1>
        <p>
          For the past 22 years, I've enjoyed building collaborative team
          projects that put your users first. If your user thinks "what's this
          for?" then the job isn't done yet. Happy users come back to your
          business again and again; happy teams work harder, faster, and take
          pride in their work. Invite me to do this for your business.
        </p>
        <div className="text-center">
          <Link to="/contact" className="m-2">
            <Button>Contact</Button>
          </Link>
          <Link
            to={{
              pathname:
                "https://drive.google.com/file/d/1vtnCZfCtNnSOT1nFXd_WWVPRjaHRHmDS/view",
            }}
            target="_blank"
            className="m-2"
          >
            <Button variant="outline-secondary">
              Resume <i className="bi bi-filetype-pdf"></i>
            </Button>
          </Link>
          <Link
            to={{ pathname: "https://github.com/luceroweb" }}
            target="_blank"
            className="m-2"
          >
            <Button variant="outline-secondary">
              GitHub <i className="bi bi-github"></i>
            </Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default Home;
