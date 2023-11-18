import React from "react";
import { Row, Col } from "react-bootstrap";
import { experience } from "../../Utils/data";
import ExperienceSection from "../Theme/ExperienceSection";

const Experience = () => {
  const jobList = experience.map((job) => (
    <ExperienceSection job={job} key={job.slug} />
  ));
  return (
    <>
      <Row>
        <Col>
          <h1 className="fs-4">Experience</h1>
        </Col>
      </Row>
      <Row>
        <Col className="timeline mt-3">
          <>{jobList}</>
        </Col>
      </Row>
    </>
  );
};

export default Experience;
