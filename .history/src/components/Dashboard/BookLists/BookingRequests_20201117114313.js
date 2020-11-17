import React from "react";
import { Form } from "react-bootstrap";

const BookingRequests = () => {
  //{bookingRequest}
  return (
    <tr>
      <td>Tahsin</td>
      <td>Amin</td>
      <td>Sumita</td>
      <td>Sumi</td>
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
