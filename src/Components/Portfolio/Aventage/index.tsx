import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import aventage1 from "./aventage1.jpg";
import aventage2 from "./aventage2.jpg";

const Aventage = () => {
  return (
    <Row>
      <Col xs={12}>
        <h1>Yamaha AVENTAGE Receivers</h1>
        <p>
          <strong>Status:</strong> Previous Site Design
        </p>
        <p>
          <strong>Technologies:</strong> Flash, HTML, jQuery
        </p>
        <div style={{ maxWidth: "700px" }} className="mb-3">
          <Carousel fade variant="dark" className="mb-3">
            <Carousel.Item>
              <img className="d-block w-100" src={aventage1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={aventage2} alt="" />
            </Carousel.Item>
          </Carousel>
          <p>
            <small>
              <strong>Side 1:</strong> AVENTAGE Receiver family of products
              landing page featuring a poster with links to all the products in
              the family, and an embedded HTML video introduction to the product
              line. At the end of the video, the poster reappears.
            </small>
          </p>
          <p>
            <small>
              <strong>Slide 2:</strong> Lower on the AVENTAGE product family
              page are 4 rich tabs that include links to full size feature
              images that appear in a lightbox.
            </small>
          </p>
        </div>
        <p>
          AVENTAGE is Yamaha's top of the line receiver model line. Yamaha
          Electronics Corporation wanted to feature the product group by adding
          web/iOS optimized video and jQuery interactions to engage the user.
        </p>
        <h3>Challenges</h3>
        <ul>
          <li>Flash/HTML video optimized for iOS and Safari.</li>
          <li>
            jQuery controlled “tabs” (large feature buttons) containing product
            features descriptions and pop-up images.
          </li>
          <li>
            Engage the user in the product without taking them off of the
            Category landing page.
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default Aventage;
