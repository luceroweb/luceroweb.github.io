import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import safe1 from "./layout2closed.jpg";
import safe2 from "./layout2open.jpg";

const SAFE = () => {
  return (
    <Row>
      <Col xs={12}>
        <h1>SAFE: Straight Advocates for Equality</h1>
        <p>
          <strong>Status:</strong> Previous Site Design
        </p>
        <p>
          <strong>Technologies:</strong> WordPress HTML, CSS, jQuery
        </p>
        <div style={{ maxWidth: "700px" }} className="mb-3">
          <Carousel fade variant="dark" className="mb-3">
            <Carousel.Item>
              <img className="d-block w-100" src={safe1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={safe2} alt="" />
            </Carousel.Item>
          </Carousel>
          <p>
            <small>
              <strong>Side 1:</strong> The Straight Advocates For Equality
              (SAFE) web site was constructed using the WordPress CMS. It
              features a blog, calendar and featured category on their home page
              that the clients can fully manage and customize.
            </small>
          </p>
          <p>
            <small>
              <strong>Slides 2:</strong> The dynamic animated and fully
              customizable top menu allows the client to manage their site
              structure over time.
            </small>
          </p>
        </div>
        <p>
          A non-profit organization was formed and needs to get a web presence
          up and running before an important event scheduled to occur in Fresno.
          They hope to manage the site themselves with only basic understanding
          of blogging and email usage.
        </p>
        <h3>Challenges</h3>
        <ul>
          <li>
            Work with client's Web Site Committee to develop a site structure
          </li>
          <li>
            Design of the look and feel of their site from scratch on an
            accelerated schedule
          </li>
          <li>
            Plan the implementation of WordPress as a CMS and SlideShow Pro for
            event photos
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default SAFE;
