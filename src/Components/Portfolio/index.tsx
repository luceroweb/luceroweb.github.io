import React from "react";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "../Theme/ProjectCard";
import projects from "../../Utils/data/projects";

const Portfolio = () => {
  const listProjects = projects.map((project, index) => (
    <Col className="mb-5 d-flex justify-content-center" key={index}>
      <ProjectCard project={project} />
    </Col>
  ));

  return (
    <Row>
      <Col xs={12}>
        <h1 className="fs-4">Portfolio</h1>
      </Col>
      {listProjects}
    </Row>
  );
};

export default Portfolio;
