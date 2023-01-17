import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import remotelive1 from "./remotelive1.jpg";
import remotelive2 from "./remotelive2.jpg";
import remotelive3 from "./remotelive3.jpg";
import remotelive4 from "./remotelive4.jpg";

const RemoteLive = () => {
  return (
    <Row>
      <Col xs={12}>
        <h1>RemoteLive</h1>
        <h2>Sync Yamaha Disklavier player pianos with video performances</h2>
        <p>
          <strong>Status:</strong> Previous Site Design
        </p>
        <p>
          <strong>Technologies:</strong> ASP, .NET environment, HTML, CSS,
          jQuery
        </p>
        <div style={{ maxWidth: "700px" }} className="mb-3">
          <Carousel fade variant="dark" className="mb-3">
            <Carousel.Item>
              <img className="d-block w-100" src={remotelive1} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={remotelive3} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={remotelive4} alt="" />
            </Carousel.Item>
          </Carousel>
          <p>
            <strong>Side 1:</strong> RemoteLive upcoming event page with promo
            poster, RemoteLive twitter feed, and upcoming events calendar.
          </p>
          <p>
            <strong>Slide 2:</strong> RemoteLive upcoming event page with event
            banner, rich text promo instead of a poster, RemoteLive twitter
            feed, and upcoming events calendar.
          </p>
          <p>
            <strong>Slide 3:</strong> An end slide showing the event banner
            promotion and a rich text message thanking the viewer for watching
            the performance.
          </p>
        </div>
        <p>
          The first iteration of a simple yet feature-rich page to display the
          revolutionary "Remote Live" technology. When connected to the audio
          feed, live performances are reproduced on the user's Disklavier. We
          are using similar functionality on the Junior Original Concert (annual
          event) and{" "}
          <a
            href="https://www.yamaha.com/yasi/multimedia.html?tab=live"
            rel="noreferrer"
            target="_blank"
          >
            Yamaha Artist Services, Inc.
          </a>{" "}
          live video pages.
        </p>
        <h3>Challenges</h3>
        <ul>
          <li>
            Created a ASP/jQuery event schedule to automate the Flash/HMTL5
            video feed.
          </li>
          <li>
            Integrated a mobile optimized remote control to override video feed
            from the shoot.
          </li>
          <li>
            Real time Twitter feed, event calendar, chat, map of connected
            Disklaviers, etc.
          </li>
          <li>
            Information is easy to understand so that any inexperienced
            Disklavier owner can enjoy effortlessly.
          </li>
        </ul>
        <h2>RemoteLive (version 2)</h2>
        <p>Status: Live</p>
        <p>
          The second itteration of an engaging user experience where consumers
          can connect their Yamaha Disklavier's to our service which allows them
          to enjoy live performances reproduced in synch with our streaming
          video to the Yamaha Disklavier in their own living room.
        </p>
        <figure style={{ maxWidth: "700px" }} className="figure mb-3">
          <img className="figure-img d-block w-100" src={remotelive2} alt="" />
          <figcaption className="figure-caption">
            An example of a RemoteLive performance from the receiving Yamaha
            Grand Piano as it reproduces the live event in sync with the
            RemoteLive video feed.
          </figcaption>
        </figure>
        <h3>Challenges</h3>
        <ul>
          <li>
            This site contains an events engine that stores and displays our
            live performance and rebroadcast schedule
          </li>
          <li>
            I constructed the first version of this site myself using simple ASP
            arrays and functions. That site provided the basis for the current
            version which our team here at Yamaha constructed in .NET along with
            my HTML/CSS/jQuery assistance.
          </li>
          <li>
            The final jQuery scripts we wrote update the events list in real
            time
          </li>
          <li>
            Just prior to a performance, the jquery invites the viewer to join
            the broadcast
          </li>
          <li>
            Broadcasts are currently presented in Flash video format only
            (restriction of our 3rd party streaming service) Since our jQuery
            regularly polls the database for changes, we can update event data
            in real time without requiring the user to reload the page.
          </li>
          <li>
            We are recently redesigning this site to incorporate On Demand video
            and streamlined connection instructions, intro video, etc.
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default RemoteLive;
