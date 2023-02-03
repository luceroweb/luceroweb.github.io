import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import mobileslideup from "./mobileslideup.jpeg";
import screenshot2 from "./screenshot-2.png";
import screenshot4 from "./screenshot-4.png";
import adlayout from "./adlayout.gif";
import exitpoplayout from "./exitpoplayout.gif";

const JSadWidgets = () => {
  return (
    <Row>
      <Col xs={12}>
        <h1>Content.ad JavaScript Widget Layouts &amp; Installation Codes</h1>
        <p>
          <strong>Status:</strong> JS ad widgets no longer active
        </p>
        <p>
          <strong>Technologies:</strong> JavaScript, AWS S3, Photoshop, HTML,
          CSS
        </p>
        <div style={{ maxWidth: "700px" }} className="mb-3">
          <Carousel fade variant="dark" className="mb-3">
            <Carousel.Item>
              <iframe
                style={{ width: "100%", aspectRatio: "1366/768" }}
                src="https://www.youtube.com/embed/0n2T9aJD6J0"
                title="How to Make a Widget"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                style={{ width: "100%", aspectRatio: "1366/768" }}
                src="https://www.youtube.com/embed/iwoj1HCeyAE"
                title="How to Make a Popup Widget"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                style={{ width: "100%", aspectRatio: "1366/768" }}
                src="https://www.youtube.com/embed/mtkJUyQg75k"
                title="How to Make a Custom Widget"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={mobileslideup} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={screenshot2} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={screenshot4} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={adlayout} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={exitpoplayout} alt="" />
            </Carousel.Item>
          </Carousel>
          <p>
            <small>
              <strong>Slide 1:</strong> How to create a Content.ad Ad Widget
              using the Publisher admin.
            </small>
          </p>
          <p>
            <small>
              <strong>Slide 2:</strong> How to create a Popup Ad Widget.
            </small>
          </p>
          <p>
            <small>
              <strong>Slide 3:</strong> How to create a custom Ad Widget layout
              in the admin.
            </small>
          </p>
          <p>
            <small>
              <strong>Slide 4:</strong> Two types of mobile slide-up widgets.
            </small>
          </p>
          <p>
            <small>
              <strong>Slide 5:</strong> Create an ad widget in the Content.ad
              admin.
            </small>
          </p>
          <p>
            <small>
              <strong>Slide 6:</strong> Ad widget performance reporting.
            </small>
          </p>
          <p>
            <small>
              <strong>Slide 7:</strong> Mobile Slide-up animation to illustrate
              how it works for Publishers.
            </small>
          </p>
          <p>
            <small>
              <strong>Slide 8:</strong> Exit Pop animation to illustrate how it
              works for Publishers.
            </small>
          </p>
        </div>
        <p>
          Content.ad was a content recommendation platform that helped site
          owners generate more time-on-site and monetize their content easily
          and unobtrusively. Publishers would create ad widgets in the
          Content.ad admin, then use the JavaScrtpt installation code to inject
          their unique Ad layout on to their web sites. I mantained,
          refactored/optimized, and designed vanilla JavaScript ad layouts to
          present ads in ways that performed by earning CPM - paid per click
          revenue for Publishers on thier sites.
        </p>
        <h3>Challenges</h3>
        <ul>
          <li>
            Origonal code was developed by the company before I joined
            Content.ad
          </li>
          <li>
            Vanilla JavaScript was the chosen delivery method for all ads, so
            layouts must modify the returned ad objects in order to produce the
            various lyouts.
          </li>
          <li>
            I maintained the 21 ad layouts and all of their versions since we
            continualy modified the ad serving strategies across our network.
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default JSadWidgets;
