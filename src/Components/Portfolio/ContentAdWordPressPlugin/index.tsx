import React from "react";
import { Row, Col, Carousel, Badge } from "react-bootstrap";
import screenshot1 from "./screenshot-1.png";
import screenshot2 from "./screenshot-2.png";
import screenshot3 from "./screenshot-3.png";
import screenshot4 from "./screenshot-4.png";

const WPPlugin = () => {
  return (
    <Row>
      <Col xs={12}>
        <h1>Content.ad WordPress Plugin</h1>
        <p>
          <strong>Status:</strong> Plugin no longer supported
        </p>
        <p>
          <strong>Technologies:</strong>{" "}
          <Badge className="group2">WordPress</Badge>{" "}
          <Badge className="group6">PHP</Badge>{" "}
          <Badge className="group3">HTML</Badge>{" "}
          <Badge className="group3">CSS</Badge>{" "}
          <Badge className="group4">jQuery</Badge>{" "}
        </p>
        <div style={{ maxWidth: "700px" }} className="mb-3">
          <Carousel fade variant="dark" className="mb-3">
            <Carousel.Item>
              <iframe
                style={{ width: "100%", aspectRatio: "1366/768" }}
                src="https://www.youtube.com/embed/scjBXIpV8vA"
                title="Content.ad Wordpress Plugin"
                // frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // allowfullscreen
              ></iframe>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={screenshot1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={screenshot2} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={screenshot3} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={screenshot4} alt="" />
            </Carousel.Item>
          </Carousel>
          <p>
            <small>
              <strong>Side 1:</strong> My old co-worker Ian, an Account Manager,
              walks you thorugh how to install and set up the Content.ad
              WordPress Plugin.
            </small>
          </p>
          <p>
            <small>
              <strong>Slide 2:</strong> Register your Publisher account.
            </small>
          </p>
          <p>
            <small>
              <strong>Slide 3:</strong> Open the Content.ad site to create an ad
              widget.
            </small>
          </p>
          <p>
            <small>
              <strong>Slide 4:</strong> Customize your ad placment in the
              WordPress plugin.
            </small>
          </p>
          <p>
            <small>
              <strong>Slide 5:</strong> Ad widget performance reporting.
            </small>
          </p>
        </div>
        <p>
          Content.ad was a content recommendation platform that helped site
          owners generate more time-on-site and monetize their content easily
          and unobtrusively. Content.ad served billions of impressions across
          thousands of sites every month. The WordPress plugin was the quickest
          and easiest way to get Content.ad up and running those sites.
        </p>
        <h3>Challenges</h3>
        <ul>
          <li>
            Origonal code was developed by a 3rd party company before I joined
            Content.ad
          </li>
          <li>
            Extended placement options for WordPress shortcodes, WordPress
            Widgets, and Publisher WordPress Key integrations.
          </li>
          <li>
            Updated plugin layout and Content.ad reporting UI within a modal
            window for mobile responsiveness.
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default WPPlugin;
