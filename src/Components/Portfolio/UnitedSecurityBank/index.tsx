import React from "react";
import { Row, Col, Carousel, Badge } from "react-bootstrap";
import usb1 from "./usbfront.jpg";
import usb2 from "./usbfs.jpg";
import usb3 from "./usbonline.jpg";

const UnitedSecurityBank = () => {
  return (
    <Row>
      <Col xs={12}>
        <h1>UnitedSecurityBank</h1>
        <p>
          <strong>Status:</strong> Previous Site Design
        </p>
        <p>
          <strong>Technologies:</strong>{" "}
          <Badge className="group2">Joomla CMS</Badge>{" "}
          <Badge className="group6">PHP</Badge>{" "}
          <Badge className="group6">SQL</Badge>{" "}
          <Badge className="group3">HTML</Badge>{" "}
          <Badge className="group3">CSS</Badge>{" "}
        </p>
        <div style={{ maxWidth: "700px" }} className="mb-3">
          <Carousel fade variant="dark" className="mb-3">
            <Carousel.Item>
              <img className="d-block w-100" src={usb1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={usb2} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={usb3} alt="" />
            </Carousel.Item>
          </Carousel>
          <p>
            <small>
              <strong>Side 1:</strong> United Security Bank's CMS included
              modules on their home page for the various portions of their web
              site. Each area was fully editable and customizable by the client.
            </small>
          </p>
          <p>
            <small>
              <strong>Slide 2:</strong> United Security Bank could easily add or
              modify article pages for various sections of their site. Custom
              fonts and layouts where aromatically added by the style sheet and
              JS files on page load.
            </small>
          </p>
          <p>
            <small>
              <strong>Slide 3:</strong> Some templates on the US Bank site
              included options to add rich features like pre-styled tabs in
              order to simplify site navigation and information structure.
            </small>
          </p>
        </div>
        <p>
          The Bank needed to update it's look to a more sleek, professional
          feel. They also wanted the ability to distribute the maintenance of
          the site throughout the company rather than exclusively to the
          technology team.
        </p>
        <h3>Challenges</h3>
        <ul>
          <li>Implemented Graphic Designer's Vision using Joomla Templates</li>
          <li>
            Joomla CMS with extensive plug-ins for diverse uses including
            JavaScript tabs and slides
          </li>
          <li>Training of staff members on the use of the Joomla CMS</li>
        </ul>
      </Col>
    </Row>
  );
};

export default UnitedSecurityBank;
