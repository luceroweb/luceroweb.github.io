import React from "react";
import { Row, Col } from "react-bootstrap";

const Proficiencies = () => {
  return (
    <Row>
      <Col xs={12}>
        <h1 className="fs-5">Proficiencies</h1>
      </Col>

      <Col sm={6} lg={3}>
        Manager/Apprentice Lead
      </Col>
      <Col sm={6} lg={3}>
        Agile, scrum master
      </Col>
      <Col sm={6} lg={3}>
        Web Accessibility
      </Col>
      <Col sm={6} lg={3}>
        JS, React & Native, TypeScript
      </Col>
      <Col sm={6} lg={3}>
        APIs, Fetch, Axios
      </Col>
      <Col sm={6} lg={3}>
        Node, npm/yarn
      </Col>
      <Col sm={6} lg={3}>
        PHP, MySQL, WordPress
      </Col>
      <Col sm={6} lg={3}>
        ASP, SQL (for .NET shops)
      </Col>
      <Col sm={6} lg={3}>
        AWS: S3, Lambda, CodeCommit
      </Col>
      <Col sm={6} lg={3}>
        git, GitHub, Bitbucket
      </Col>
      <Col sm={6} lg={3}>
        VS Code, Visual Studio
      </Col>
      <Col sm={6} lg={3}>
        Notepad++
      </Col>
      <Col sm={6} lg={3}>
        Windows, Mac, Linux
      </Col>
      <Col sm={6} lg={3}>
        iOS, Android
      </Col>
      <Col sm={6} lg={3}>
        HTML5, CSS3, SASS
      </Col>
      <Col sm={6} lg={3}>
        Bootstrap
      </Col>
      <Col sm={6} lg={3}>
        Mobile/Web Responsive
      </Col>
      <Col sm={6} lg={3}>
        Cross browser optimization
      </Col>
    </Row>
  );
};

export default Proficiencies;
