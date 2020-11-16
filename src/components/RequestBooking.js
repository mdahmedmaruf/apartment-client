import React from "react";
import { Button, Form } from "react-bootstrap";

const RequestBooking = () => {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Full Name" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="text" placeholder="Phone No." />
        </Form.Group>
        <Form.Group>
          <Form.Control type="email" placeholder="Email Address" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="textarea" placeholder="Message" />
        </Form.Group>
        <Button className="bg-primary" variant="primary" type="submit">
          Request Booking
        </Button>
      </Form>
    </div>
  );
};

export default RequestBooking;
