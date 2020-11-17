import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContext } from "../App";

const RequestBooking = ({apartmentDetails}) => {
  
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) =>{
       const request = {...data};
       request.title = apartmentDetails.title;
       request.price = apartmentDetails.price;
        
      console.log(request);

       //fetch('http://localhost:5000/request-booking')
  }

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
