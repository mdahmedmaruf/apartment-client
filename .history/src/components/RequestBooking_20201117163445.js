import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContext } from "../App";

const RequestBooking = ({apartmentDetails}) => {
  
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
 
  console.log(apartmentDetails);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <Form className="request-form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Full Name"
            name="fullName"
            ref={register}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Phone No."
            name="phoneNo"
            ref={register}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Email Address"
            name="email"
            ref={register}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Message"
            name="message"
            ref={register}
          />
        </Form.Group>
        <Button className="bg-primary" variant="primary" type="submit">
          Request Booking
        </Button>
      </Form>
    </div>
  );
};

export default RequestBooking;
