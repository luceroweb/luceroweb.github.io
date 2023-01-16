import React from "react";
import { Row, Col } from "react-bootstrap";
import face from "../../images/face.jpg";

const Experience = () => {
  return (
    <Row>
      <Col>
        <h1 className="fs-5">Experience AKA Career Development</h1>
        <h2 className="fs-6">
          AlphaWorks/Bitwise | <strong>Apprentice Lead (Manager)</strong>
        </h2>
        <p>
          <small>Fresno, CA: 2021 – 2023</small>
        </p>
        <p>React/React-Native lead for React MVPs and Caffeine Overflow.</p>
        <ul>
          <li>
            <strong>React & Native w/ TypeScript</strong> collaborative project{" "}
            <strong>hands on training</strong>
          </li>
          <li>
            Provided <strong>remote instruction</strong> focusing on{" "}
            <strong>collaborative</strong> team building
          </li>
          <li>
            Trained:{" "}
            <strong>HTML5/CSS/JS, Agile Methodology, gitHub, debugging</strong>
          </li>
        </ul>
        <h2 className="fs-6">
          Content.ad | <strong>Front End Web Developer</strong>
        </h2>
        <p>
          <small>Irvine, CA: 2015 – 2021</small>
        </p>
        <p>
          Helped build/maintain digital ad network serving 1 billion+
          impressions/day.
        </p>
        <ul>
          <li>
            <strong>Scrum Master</strong> for company Portal.
          </li>
          <li>
            <strong>React development</strong> for internal users, advertisers,
            and publishers
          </li>
          <li>
            Maintained & extended <strong>HTML5/CSS3/JS</strong> ad layouts &
            animations
          </li>
          <li>
            Maintained high traffic WP sites plus primary marketing site & WP
            Plugin
          </li>
        </ul>
        <h2 className="fs-6">
          Experian Consumer Direct | <strong>Front End Web Developer</strong>
        </h2>
        <p>
          <small>Costa Mesa, CA: 2012 – 2015</small>
        </p>
        <p>
          Helped build{" "}
          <strong>
            Experian's{" "}
            <a href="https://FreeCreditReport.com" target="_blank">
              FreeCreditReport.com
            </a>
            /
            <a href="https://FreeCreditScore.com" target="_blank">
              FreeCreditScore.com
            </a>
          </strong>{" "}
          white label sites for corporate clients.
        </p>
        <ul>
          <li>
            <strong>Web Accessibility Expert</strong> for Experian's client,{" "}
            <strong>Wells Fargo</strong>
          </li>
          <li>
            Utilized <strong>Visual Studio with git</strong>, and Tridion CMS
            among others.
          </li>
          <li>
            <strong>Bootstrap Expert</strong> for{" "}
            <strong>USAA's Angular Credit Check products</strong>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default Experience;
