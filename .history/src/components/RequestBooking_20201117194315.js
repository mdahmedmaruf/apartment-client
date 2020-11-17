import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { UserContext } from "../App";

const RequestBooking = ({apartmentDetails}) => {
  
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  const { register, handleSubmit } = useForm();


  const onSubmit = (data) =>{
   const newRequest = {
        fullName :data.fullName,
        phoneNo : data.phoneNo,
        email : data.email,
        message : data.message,
        houseId : apartmentDetails.id,
        title : apartmentDetails.title,
        price : apartmentDetails.price,
   }


    fetch('https://immense-scrubland-81187.herokuapp.com/request-booking',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(newRequest)
    }).then(response => response.json())
    .then(data => console.log(data));
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
            defaultValue={loggedInUser.email||loggedInUser.currentEmail}
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
