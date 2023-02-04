import React from "react";
import { Row, Col, Carousel, Badge } from "react-bootstrap";
import smittcamp1 from "./smittcamp1.jpg";
import smittcamp2 from "./smittcamp2_1.jpg";
import smittcamp3 from "./smittcamp3_1.jpg";

const Smittcamp = () => {
  return (
    <Row>
      <Col xs={12}>
        <h1>Smittcamp Family Honors College at Fresno State</h1>
        <p>
          <strong>Status:</strong> Previous Site Design
        </p>
        <p>
          <strong>Technologies:</strong> <Badge className="group9">Flash</Badge>{" "}
          <Badge className="group9">Adobe Contribute</Badge>{" "}
          <Badge className="group3">HTML</Badge>{" "}
          <Badge className="group3">CSS</Badge>{" "}
          <Badge className="group4">jQuery</Badge>{" "}
        </p>
        <div style={{ maxWidth: "700px" }} className="mb-3">
          <Carousel fade variant="dark" className="mb-3">
            <Carousel.Item>
              <img className="d-block w-100" src={smittcamp1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={smittcamp2} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={smittcamp3} alt="" />
            </Carousel.Item>
          </Carousel>
          <p>
            <small>
              <strong>Side 1:</strong> The Smittcamp Family Honors College site
              was built will fully editable Dreamweaver Templates so that the
              client could edit any of their pages and maintain the universal
              look & feel of their site. Custom semi-transparent fly-out menus
              provide additional information about each menu item.
            </small>
          </p>
          <p>
            <small>
              <strong>Slides 2 & 3:</strong> A standard page includes the
              standardized menu with a background image customized for each
              section of the site. 3 columns of fully editable text fill out a
              standard article page.
            </small>
          </p>
        </div>
        <p>
          The Honors College was looking to update their out of date site with a
          graphically appealing new design to entice honors level students to
          Fresno State.
        </p>
        <h3>Challenges</h3>
        <ul>
          <li>Implemented Graphic Designer's Vision using Flash and HTML</li>
          <li>Adobe Contribute with Advanced Dreamweaver Templates</li>
          <li>SlideShow Pro with CSS and HTML floating on top</li>
        </ul>
      </Col>
    </Row>
  );
};

export default Smittcamp;
