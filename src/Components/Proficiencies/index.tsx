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
          <Card.Header className="bg-primary text-light">
            <Card.Title>Management</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge bg="primary">Manager</Badge>{" "}
              <Badge bg="primary">Apprentice Lead</Badge>{" "}
              <Badge bg="primary">Agile Methodology</Badge>{" "}
              <Badge bg="primary">Scrum Master</Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="bg-success text-light">
            <Card.Title>Tech Stacks</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge bg="success">MERN Stack</Badge>:{" "}
              <Badge bg="info" text="dark">
                MongoDB
              </Badge>{" "}
              <Badge bg="info" text="dark">
                Express
              </Badge>{" "}
              <Badge bg="danger">React</Badge>{" "}
              <Badge bg="danger">React-Native</Badge>
              <Badge bg="info" text="dark">
                node
              </Badge>{" "}
              <Badge bg="secondary">HTML</Badge>{" "}
              <Badge bg="danger">Handlebars</Badge>{" "}
              <Badge bg="secondary">HTML</Badge>{" "}
              <Badge bg="warning" text="dark">
                JavaScript
              </Badge>{" "}
            </Card.Text>
            <Card.Text>
              <Badge bg="success">WordPress</Badge>:{" "}
              <Badge bg="info" text="dark">
                PHP
              </Badge>{" "}
              <Badge bg="info" text="dark">
                MySQL
              </Badge>{" "}
              <Badge bg="secondary">HTML</Badge>{" "}
              <Badge bg="secondary">HTML</Badge>{" "}
              <Badge bg="secondary">Bootstrap</Badge>{" "}
              <Badge bg="warning" text="dark">
                JavaScript
              </Badge>{" "}
              <Badge bg="warning" text="dark">
                jQuery
              </Badge>{" "}
            </Card.Text>
            <Card.Text>
              <Badge bg="success">.Net</Badge> <small>(Front End Only)</small>:{" "}
              <Badge bg="info" text="dark">
                SQL
              </Badge>{" "}
              <Badge bg="secondary">HTML</Badge>{" "}
              <Badge bg="secondary">HTML</Badge>{" "}
              <Badge bg="warning" text="dark">
                JavaScript
              </Badge>{" "}
              <Badge bg="warning" text="dark">
                jQuery
              </Badge>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="bg-secondary text-light">
            <Card.Title>Web Fundamentals</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge bg="secondary">HTML</Badge>{" "}
              <Badge bg="secondary">CSS</Badge>{" "}
              <Badge bg="secondary">SASS</Badge>{" "}
              <Badge bg="secondary">Bootstrap</Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="bg-warning">
            <Card.Title>JavaScript Fundamentals</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge bg="warning" text="dark">
                JavaScript
              </Badge>{" "}
              <Badge bg="warning" text="dark">
                jQuery
              </Badge>{" "}
              <Badge bg="warning" text="dark">
                Fetch
              </Badge>{" "}
              <Badge bg="warning" text="dark">
                Axios
              </Badge>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="bg-danger text-light">
            <Card.Title>Front End Web Development</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge bg="danger">React</Badge>{" "}
              <Badge bg="danger">React-Native</Badge>{" "}
              <Badge bg="danger">TypeScript</Badge>{" "}
              <Badge bg="danger">Redux Toolkit</Badge>{" "}
              <Badge bg="danger">Handlebars</Badge>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="bg-info text-dark">
            <Card.Title>Back End Web Development</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge bg="info" text="dark">
                node
              </Badge>{" "}
              <Badge bg="info" text="dark">
                npm
              </Badge>{" "}
              <Badge bg="info" text="dark">
                yarn
              </Badge>{" "}
              <Badge bg="info" text="dark">
                Express
              </Badge>{" "}
              <Badge bg="info" text="dark">
                PHP
              </Badge>{" "}
              <Badge bg="info" text="dark">
                MongoDB
              </Badge>{" "}
              <Badge bg="info" text="dark">
                SQL
              </Badge>{" "}
              <Badge bg="info" text="dark">
                MySQL
              </Badge>{" "}
              <Badge bg="info" text="dark">
                APIs
              </Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="bg-light">
            <Card.Title>Cloud/Serverless</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge bg="light" text="dark">
                S3
              </Badge>{" "}
              <Badge bg="light" text="dark">
                Lambda
              </Badge>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="bg-dark text-light">
            <Card.Title>Operating Systems</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge bg="dark">Linux</Badge> <Badge bg="dark">Windows</Badge>{" "}
              <Badge bg="dark">Android</Badge> <Badge bg="dark">iOS</Badge>{" "}
              <Badge bg="dark">macOS</Badge>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="orange">
            <Card.Title>UI/UX</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge className="orange">Photoshop</Badge>{" "}
              <Badge className="orange">Figma</Badge>{" "}
              <Badge className="orange">Web Accessibility</Badge>{" "}
              <Badge className="orange">Mobile/Web Responsive</Badge>{" "}
              <Badge className="orange">Cross browser optimization</Badge>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col className="mb-5 d-flex justify-content-center">
        <Card>
          <Card.Header className="indigo">
            <Card.Title>Dev Tools</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Badge className="indigo">VS Code</Badge>{" "}
              <Badge className="indigo">Visual Studio</Badge>{" "}
              <Badge className="indigo">Notepad++</Badge>{" "}
              <Badge className="indigo">git</Badge>{" "}
              <Badge className="indigo">GitHub</Badge>{" "}
              <Badge className="indigo">CodeCommit</Badge>{" "}
              <Badge className="indigo">Bitbucket</Badge>{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Proficiencies;
