import React from "react";
import { Row, Col } from "react-bootstrap";
import face from "../../images/face.jpg";

const Header = () => {
  return (
    <Row>
      <Col sm={6} md={8}>
        <h1 className="fs-5">Contact</h1>
      </Col>
    </Row>
  );
};

export default Header;
