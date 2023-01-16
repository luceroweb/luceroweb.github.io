import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const Contact = () => {
  const [message, setMessage] = useState<string>("");
  const [isSent, setIsSent] = useState<boolean>(false);

  const sendContactForm = () => {
    if (!message.trim()) {
      return;
    }

    let mailto = `mailto:luceroweb@gmail.com`;
    mailto += `?subject=Juan Lucero's Portfolio`;
    mailto += `&body=${message}`;
    window.open(mailto);
    setIsSent(true);
  };

  return (
    <Row>
      <Col>
        <h1 className="fs-5">Contact</h1>

        {isSent ? (
          <h1 className="fs-3">
            <strong>Thanks for contacting me</strong>
          </h1>
        ) : (
          <Form>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Write your message here..."
                value={message}
                rows={3}
                required
              />
            </Form.Group>

            <Button variant="primary" onClick={sendContactForm} type="submit">
              Send
            </Button>
          </Form>
        )}
      </Col>
    </Row>
  );
};

export default Contact;
