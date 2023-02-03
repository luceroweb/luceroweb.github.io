import React from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import face from "../../images/face.jpg";
import jswidgets from "../Portfolio/ContentAdWidgets/mobileslideup.jpeg";
import wpplugin from "../Portfolio/ContentAdWordPressPlugin/screenshot-1.png";
import remotelive from "../Portfolio/RemoteLive/remotelive_thumb.jpg";
import aventage from "../Portfolio/Aventage/aventage_thumb.jpg";
import usb from "../Portfolio/UnitedSecurityBank/usb_thumb.jpg";
import smittcamp from "../Portfolio/Smittcamp/smittcamp_thumb.jpg";
import safe from "../Portfolio/StraightAdvocatesForEquality/layout_thumb.jpg";
import meetinthemiddle from "../Portfolio/MeetInTheMiddle4Equality/meetinthemiddle_thumb.jpg";
import karot from "../Portfolio/Karot/karot1login.png";
import triviachill from "../Portfolio/Trivia&Chill/tc0title.png";
import hauntedhouse from "../Portfolio/HauntedHouse/hh1intro.png";

const Home = () => {
  return (
    <Row>
      <Col sm={6} md={4} className="mb-3 mb-md-0 text-center">
        <img src={face} alt="" className="profile rounded" />
      </Col>
      <Col sm={6} md={8}>
        <h1 className="fs-5">
          22 years moving user focused businesses forward
        </h1>
        <p>
          I enjoy building collaborative team projects, because happy teams work
          harder, faster, and take pride in their work. Customers will see the
          work and say "That's just what I wanted". Happy customers make happy
          clients, who come back again and again. Invite me to do this for you.
        </p>
        <div className="text-center">
          <Link to="/contact" className="d-inline-block m-1">
            <Button>Contact</Button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1vtnCZfCtNnSOT1nFXd_WWVPRjaHRHmDS/view?usp=share_link"
            rel="noreferrer"
            target="_blank"
            className="d-inline-block m-1"
          >
            <Button variant="outline-secondary">
              Resume <i className="bi bi-filetype-pdf"></i>
            </Button>
          </a>
          <a
            href="https://github.com/luceroweb"
            rel="noreferrer"
            target="_blank"
            className="d-inline-block m-1"
          >
            <Button variant="outline-secondary">
              GitHub <i className="bi bi-github"></i>
            </Button>
          </a>
        </div>
      </Col>
      <Col className="timeline mt-3">
        <section aria-labelledby="alphaworks">
          <h2 id="alphaworks">2021 – 2023</h2>
          <div>
            <h3>
              <i className="bi bi-geo-alt-fill"></i> Fresno, CA
            </h3>
            <h3>
              AlphaWorks/Bitwise | <strong>Apprentice Lead (Manager)</strong>
            </h3>
            <p>React/React-Native lead for React MVPs and Caffeine Overflow.</p>
            <ul>
              <li>
                <strong>React & Native w/ TypeScript</strong> collaborative
                project <strong>hands on training</strong>
              </li>
              <li>
                Provided <strong>remote instruction</strong> focusing on{" "}
                <strong>collaborative</strong> team building
              </li>
              <li>
                Trained:{" "}
                <strong>
                  HTML/CSS/JS, Agile Methodology, gitHub, debugging
                </strong>
              </li>
            </ul>
          </div>

          <Row>
            <Col className="mb-5 d-flex justify-content-center">
              <Card>
                <Card.Img variant="top" src={karot} alt="Karot: Saving Smart" />
                <Card.Body>
                  <Card.Title>Karot: Saving Smart.</Card.Title>
                  <Card.Text>An envelope savings app</Card.Text>
                  <Card.Text>
                    <small>Firebase, Native, Redux, TypeScript</small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    href="https://karot-saving-smart.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                    className="m-1"
                  >
                    <Button>App</Button>
                  </a>
                  <a
                    href="https://github.com/luceroweb/karot-saving-smart"
                    rel="noreferrer"
                    target="_blank"
                    className="m-1"
                  >
                    <Button>
                      <i className="bi bi-github"></i> Code
                    </Button>
                  </a>
                  <Link to="/portfolio/karotsavingsmart" className="m-1">
                    <Button>Details</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mb-5 d-flex justify-content-center">
              <Card>
                <Card.Img
                  variant="top"
                  src={triviachill}
                  alt="Trivia & Chill"
                />
                <Card.Body>
                  <Card.Title>Trivia & Chill</Card.Title>
                  <Card.Text>Movie Trivia Game</Card.Text>
                  <Card.Text>
                    <small>React, Redux, Axios, HTML, CSS</small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    href="https://luceroweb.github.io/trivia-and-chill/"
                    rel="noreferrer"
                    target="_blank"
                    className="m-1"
                  >
                    <Button>App</Button>
                  </a>
                  <a
                    href="https://github.com/luceroweb/trivia-and-chill"
                    rel="noreferrer"
                    target="_blank"
                    className="m-1"
                  >
                    <Button>
                      <i className="bi bi-github"></i> Code
                    </Button>
                  </a>
                  <Link to="/portfolio/triviachill" className="m-1">
                    <Button>Details</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mb-5 d-flex justify-content-center">
              <Card>
                <Card.Img
                  variant="top"
                  src={hauntedhouse}
                  alt="Haunted House Game"
                />
                <Card.Body>
                  <Card.Title>Haunted House Game</Card.Title>
                  <Card.Text>Choose your own adventure game.</Card.Text>
                  <Card.Text>
                    <small>React, HTML, CSS</small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    href="https://luceroweb.github.io/haunted-house-game"
                    rel="noreferrer"
                    target="_blank"
                    className="m-1"
                  >
                    <Button>App</Button>
                  </a>
                  <a
                    href="https://github.com/luceroweb/haunted-house-game"
                    rel="noreferrer"
                    target="_blank"
                    className="m-1"
                  >
                    <Button>
                      <i className="bi bi-github"></i> Code
                    </Button>
                  </a>
                  <Link to="/portfolio/hauntedhousegame">
                    <Button>Details</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </section>
        <section aria-labelledby="content-ad">
          <h2 id="content-ad">2015 – 2021</h2>
          <div>
            <h3>
              <i className="bi bi-geo-alt-fill"></i> Irvine, CA
            </h3>
            <h3>
              Content.ad | <strong>Front End Web Developer</strong>
            </h3>
            <p>
              Helped build/maintain digital ad network serving 1 billion+
              impressions/day.
            </p>
            <ul>
              <li>
                <strong>Scrum Master</strong> for company Portal.
              </li>
              <li>
                <strong>React development</strong> for internal users,
                advertisers, and publishers
              </li>
              <li>
                Maintained & extended <strong>HTML/CSS/JS</strong> ad layouts &
                animations
              </li>
              <li>
                Maintained high traffic WP sites plus primary marketing site &
                WP Plugin
              </li>
            </ul>
          </div>
          <Row>
            <Col className="mb-5 d-flex justify-content-center">
              <Card>
                <Card.Img
                  variant="top"
                  src={wpplugin}
                  alt="Content.ad WordPress Plugin"
                />
                <Card.Body>
                  <Card.Title>WordPress Plugin</Card.Title>
                  <Card.Text>for Content.ad</Card.Text>
                  <Card.Text>
                    <small>WordPress, PHP, HTML, CSS, jQuery</small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <a
                    href="https://wordpress.org/plugins/contentad/"
                    rel="noreferrer"
                    target="_blank"
                    className="m-1"
                  >
                    <Button>Plugin</Button>
                  </a>
                  <a
                    href="https://plugins.trac.wordpress.org/browser/contentad/"
                    rel="noreferrer"
                    target="_blank"
                    className="m-1"
                  >
                    <Button>
                      <i className="bi bi-wordpress"></i> Code
                    </Button>
                  </a>
                  <Link to="/portfolio/wordpressplugin" className="m-1">
                    <Button>Details</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mb-5 d-flex justify-content-center">
              <Card>
                <Card.Img
                  variant="top"
                  src={jswidgets}
                  alt="Karot: Saving Smart"
                />
                <Card.Body>
                  <Card.Title>JavaScript Ad Widgets</Card.Title>
                  <Card.Text>for Content.ad</Card.Text>
                  <Card.Text>
                    <small>JavaScript, S3, Photoshop, HTML, CSS</small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to="/portfolio/javascriptadwidgets" className="m-1">
                    <Button>Details</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </section>
        <section aria-labelledby="experian">
          <h2 id="experian">2012 – 2015</h2>
          <div>
            <h3>
              <i className="bi bi-geo-alt-fill"></i> Costa Mesa, CA:{" "}
            </h3>
            <h3>
              Experian Consumer Direct |{" "}
              <strong>Front End Web Developer</strong>
            </h3>
            <p>
              Helped build{" "}
              <strong>
                Experian's{" "}
                <a
                  href="https://FreeCreditReport.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  FreeCreditReport.com
                </a>{" "}
                /{" "}
                <a
                  href="https://FreeCreditScore.com"
                  rel="noreferrer"
                  target="_blank"
                >
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
                Utilized <strong>Visual Studio with git</strong>, and Tridion
                CMS among others.
              </li>
              <li>
                <strong>Bootstrap Expert</strong> for{" "}
                <strong>USAA's Angular Credit Check products</strong>
              </li>
            </ul>
          </div>
        </section>
        <section aria-labelledby="yamaha">
          <h2 id="yamaha">2009 – 2012</h2>
          <div>
            <h3>
              <i className="bi bi-geo-alt-fill"></i> Buena Park, CA
            </h3>
            <h3>
              Yamaha | <strong>Front End Web Developer Lead</strong>
            </h3>
            <p>
              Developed promo sites using <strong>HTML/CSS/jQuery</strong>
            </p>
            <ul>
              <li>
                Developed live & pre-recorded{" "}
                <strong>video and slideshow galleries</strong>
              </li>
              <li>
                Aided{" "}
                <a
                  href="https://usa.yamaha.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  Yamaha Corporation of America
                </a>{" "}
                redesign/migration
              </li>
              <li>
                Direct internal client communication to{" "}
                <strong>manage dev team in India</strong>
              </li>
            </ul>
          </div>

          <Row>
            <Col className="mb-5 d-flex justify-content-center">
              <Card>
                <Link to="/portfolio/remotelive">
                  <Card.Img variant="top" src={remotelive} alt="RemoteLive" />
                </Link>
                <Card.Body>
                  <Card.Title>RemoteLive</Card.Title>
                  <Card.Text>Your Disklavier plays along</Card.Text>
                  <Card.Text>
                    <small>ASP, HTML, CSS, jQuery</small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to="/portfolio/remotelive">
                    <Button>Details</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mb-5 d-flex justify-content-center">
              <Card>
                <Link to="/portfolio/aventage">
                  <Card.Img variant="top" src={aventage} alt="AVENTAGE" />
                </Link>
                <Card.Body>
                  <Card.Title>AVENTAGE</Card.Title>
                  <Card.Text>Yamaha Receivers</Card.Text>
                  <Card.Text>
                    <small>Flash, HTML, jQuery</small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to="/portfolio/aventage">
                    <Button>Details</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </section>
        <section aria-labelledby="edesign">
          <h2 id="edesign">2007 – 2009</h2>
          <div>
            <h3>
              <i className="bi bi-geo-alt-fill"></i> Fresno, CA
            </h3>
            <h3>
              e:Design, inc. | <strong>Web Architect</strong>
            </h3>
            <p>
              Tight knit print and web family; building projects for education,
              business and nonprofit.
            </p>
            <ul>
              <li>
                Created, debugged, maintained exciting{" "}
                <strong>WordPress</strong> sites using{" "}
                <strong>PHP/MySQL/HTML/CSS/jQuery</strong>
              </li>
              <li>Trained clients remotely on use of WordPress</li>
            </ul>
          </div>

          <Row>
            <Col className="mb-5 d-flex justify-content-center">
              <Card>
                <Link to="/portfolio/unitedsecuritybank">
                  <Card.Img
                    variant="top"
                    src={usb}
                    alt="United Security Bank"
                  />
                </Link>
                <Card.Body>
                  <Card.Title>United Security Bank</Card.Title>
                  <Card.Text>WordPress marketing site</Card.Text>
                  <Card.Text>
                    <small>Joomla CMS, PHP, SQL, HTML, CSS</small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to="/portfolio/unitedsecuritybank">
                    <Button>Details</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </section>
        <section aria-labelledby="netpas">
          <h2 id="netpas">2005 – 2007</h2>
          <div>
            <h3>
              <i className="bi bi-geo-alt-fill"></i> Fresno, CA
            </h3>
            <h3>
              NetPas, inc. | <strong>Web Designer</strong>
            </h3>
            <ul>
              <li>
                <strong>Sole web developer</strong> for company and direct
                client communication: nonprofits, higher education, agriculture
                and small businesses
              </li>
              <li>
                Extended <strong>ASP/SQL</strong> CMS: reporting, case &
                customer management
              </li>
              <li>
                <strong>Collaborated with sales on concept/design</strong> of
                client projects & print
              </li>
            </ul>
          </div>
        </section>
        <section aria-labelledby="lucerowebdesign">
          <h2 id="lucerowebdesign">2004 – 2005</h2>
          <div>
            <h3>
              <i className="bi bi-geo-alt-fill"></i> Fresno, CA
            </h3>
            <h3>
              Lucero Web Design | <strong>Owner</strong>
            </h3>
            <ul>
              <li>
                Owned/operated full service design & maintenance: nonprofit,
                higher education and small businesses
              </li>
              <li>Managed consultants</li>
              <li>
                <strong>CSU, Fresno: PHP/MySQL</strong> phone directory, class
                requirements site
              </li>
            </ul>
          </div>

          <Row>
            <Col className="mb-5 d-flex justify-content-center">
              <Card>
                <Link to="/portfolio/straightadvocatesforequality">
                  <Card.Img
                    variant="top"
                    src={safe}
                    alt="SAFE: Straight Advocates for Equality"
                  />
                </Link>
                <Card.Body>
                  <Card.Title>SAFE:</Card.Title>
                  <Card.Text>Straight Advocates for Equality</Card.Text>
                  <Card.Text>
                    <small>WordPress, HTML, CSS, jQuery</small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to="/portfolio/straightadvocatesforequality">
                    <Button>Details</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mb-5 d-flex justify-content-center">
              <Card>
                <Link to="/portfolio/meetinthemiddle4equality">
                  <Card.Img
                    variant="top"
                    src={meetinthemiddle}
                    alt="Meet in the Middle 4 Equality"
                  />
                </Link>
                <Card.Body>
                  <Card.Title>Meet in the Middle 4 Equality</Card.Title>
                  <Card.Text>
                    <small>Joomla, Flash, PHP, SQL, HTML, CSS, jQuery</small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to="/portfolio/meetinthemiddle4equality">
                    <Button>Details</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </section>
        <section aria-labelledby="csufresno">
          <h2 id="csufresno">2001 – 2004</h2>
          <div>
            <h3>
              <i className="bi bi-geo-alt-fill"></i> Fresno, CA
            </h3>
            <h3>
              CSU, Fresno | <strong>Assistant Web Manager</strong>
            </h3>
            <ul>
              <li>
                Design/manage/maintain integral university sites:{" "}
                <strong>Web accessibility guidelines, primary site</strong>,
                Fresno State News, University Journal,{" "}
                <strong>Phone Directory, Site Index</strong>, and directed
                contact page inquiries
              </li>
              <li>
                Trained students/faculty/administrators on policy, templates,
                and guidelines
              </li>
            </ul>
          </div>

          <Row>
            <Col className="mb-5 d-flex justify-content-center">
              <Card>
                <Link to="/portfolio/smittcamp">
                  <Card.Img
                    variant="top"
                    src={smittcamp}
                    alt="Smittcamp Family Honors College"
                  />
                </Link>
                <Card.Body>
                  <Card.Title>Smittcamp Family:</Card.Title>
                  <Card.Text>CSU, Fresno Honors College</Card.Text>
                  <Card.Text>
                    <small>Flash, Adobe Contribute, HTML, CSS, jQuery</small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to="/portfolio/smittcamp">
                    <Button>Details</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </section>
      </Col>
    </Row>
  );
};

export default Home;
