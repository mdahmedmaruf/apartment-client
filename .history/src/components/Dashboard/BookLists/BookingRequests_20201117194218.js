import React from "react";
import { Form } from "react-bootstrap";

const BookingRequests = ({bookingRequest}) => {
  //{bookingRequest}
  return (
    <tr>
      <td>{bookingRequest.fullName}</td>
       <td>{bookingRequest.email}</td>
       <td>{bookingRequest.phoneNo}</td>
       <td>{bookingRequest.message}</td>
      <td>
        <Form>
          <Form.Group className="mb-0">
            <Form.Control as="select">
              <option>Pending</option>
              <option>In Progress</option>
              <option>Done</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </td>
    </tr>
  );
};

export default BookingRequests;
