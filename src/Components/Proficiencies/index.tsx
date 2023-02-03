import React from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";

const Proficiencies = () => {
  return (
    <Row>
      <Col xs={12}>
        <h1 className="fs-5">Proficiencies</h1>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="group1">
            <Card.Title>Management</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge className="group1">Manager</Badge>{" "}
              <Badge className="group1">Apprentice Lead</Badge>{" "}
              <Badge className="group1">Agile Methodology</Badge>{" "}
              <Badge className="group1">Scrum Master</Badge>
            </Card.Text>
          </Card.Body>
        </Card>
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

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="group3">
            <Card.Title>Web Fundamentals</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge className="group3">HTML</Badge>{" "}
              <Badge className="group3">CSS</Badge>{" "}
              <Badge className="group3">SASS</Badge>{" "}
              <Badge className="group3">Bootstrap</Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="group4">
            <Card.Title>JavaScript Fundamentals</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge className="group4">JavaScript</Badge>{" "}
              <Badge className="group4">jQuery</Badge>{" "}
              <Badge className="group4">Fetch</Badge>{" "}
              <Badge className="group4">Axios</Badge>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="group5">
            <Card.Title>Front End Web Development</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge className="group5">React</Badge>{" "}
              <Badge className="group5">React-Native</Badge>{" "}
              <Badge className="group5">TypeScript</Badge>{" "}
              <Badge className="group5">Redux Toolkit</Badge>{" "}
              <Badge className="group5">Handlebars</Badge>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="group6">
            <Card.Title>Back End Web Development</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge className="group6">node</Badge>{" "}
              <Badge className="group6">npm</Badge>{" "}
              <Badge className="group6">yarn</Badge>{" "}
              <Badge className="group6">Express</Badge>{" "}
              <Badge className="group6">PHP</Badge>{" "}
              <Badge className="group6">MongoDB</Badge>{" "}
              <Badge className="group6">SQL</Badge>{" "}
              <Badge className="group6">MySQL</Badge>{" "}
              <Badge className="group6">APIs</Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="group7">
            <Card.Title>Cloud/Serverless</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge className="group7">S3</Badge>{" "}
              <Badge className="group7">Lambda</Badge>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="group8">
            <Card.Title>Operating Systems</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge className="group8">Linux</Badge>{" "}
              <Badge className="group8">Windows</Badge>{" "}
              <Badge className="group8">Android</Badge>{" "}
              <Badge className="group8">iOS</Badge>{" "}
              <Badge className="group8">macOS</Badge>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="group9">
            <Card.Title>UI/UX</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge className="group9">Photoshop</Badge>{" "}
              <Badge className="group9">Figma</Badge>{" "}
              <Badge className="group9">Web Accessibility</Badge>{" "}
              <Badge className="group9">Mobile/Web Responsive</Badge>{" "}
              <Badge className="group9">Cross browser optimization</Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="group10">
            <Card.Title>Dev Tools</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge className="group10">VS Code</Badge>{" "}
              <Badge className="group10">Visual Studio</Badge>{" "}
              <Badge className="group10">Notepad++</Badge>{" "}
              <Badge className="group10">git</Badge>{" "}
              <Badge className="group10">GitHub</Badge>{" "}
              <Badge className="group10">CodeCommit</Badge>{" "}
              <Badge className="group10">Bitbucket</Badge>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Proficiencies;
