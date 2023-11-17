import React from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import { techStacks, proficiencies } from "../../Utils/data";
import TechCard from "../Theme/TechCard";

const Proficiencies = () => {
  const listProficiencies = Object.values(proficiencies).map(
    (group: Object, index: React.Key) => (
      <Col className="mb-5 d-flex justify-content-center" key={index}>
        <TechCard techGroup={group} />
      </Col>
    )
  );

  return (
    <Row>
      <Col xs={12}>
        <h1 className="fs-5">Proficiencies</h1>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="group2">
            <Card.Title>Tech Stacks</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge className="group2">MERN Stack</Badge>:{" "}
              <Badge className="group6">MongoDB</Badge>{" "}
              <Badge className="group6">Express</Badge>{" "}
              <Badge className="group5">React</Badge>{" "}
              <Badge className="group5">React-Native</Badge>
              <Badge className="group6">node</Badge>{" "}
              <Badge className="group3">HTML</Badge>{" "}
              <Badge className="group5">Handlebars</Badge>{" "}
              <Badge className="group4">JavaScript</Badge>{" "}
            </Card.Text>
            <Card.Text>
              <Badge className="group2">WordPress</Badge>:{" "}
              <Badge className="group6">PHP</Badge>{" "}
              <Badge className="group6">MySQL</Badge>{" "}
              <Badge className="group3">HTML</Badge>{" "}
              <Badge className="group3">Bootstrap</Badge>{" "}
              <Badge className="group4">JavaScript</Badge>{" "}
              <Badge className="group4">jQuery</Badge>{" "}
            </Card.Text>
            <Card.Text>
              <Badge className="group2">.Net Front End</Badge>:{" "}
              <Badge className="group6">SQL</Badge>{" "}
              <Badge className="group3">HTML</Badge>{" "}
              <Badge className="group4">JavaScript</Badge>{" "}
              <Badge className="group4">jQuery</Badge>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {listProficiencies}
    </Row>
  );
};

export default Proficiencies;
