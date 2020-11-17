import React, { useState } from "react";
import { Col, Form, Row, Table } from "react-bootstrap";
import DashboardNav from "../DashboardCommon/DashboardNav";
import DashboardSidebar from "../DashboardCommon/DashboardSidebar";
//import BookingRequests from "./BookingRequests";

const BookLists = () => {
     const [bookingRequests, setBookingRequests] = useState([]);

   useEffect(() => {
      fetch("http://localhost:5000/booking-list")
        .then((res) => res.json())
        .then((data) => setBookingRequests(data));
    }, []);
    
  return (
    <>
      <DashboardNav />
      <Row>
        <Col md={3}>
          <DashboardSidebar />
        </Col>
        <Col md={9}>
          <h3 className="my-5 mx-5">Booking Lists</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email ID</th>
                <th>Phone No</th>
                <th>Message</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookingRequests.map((bookingRequest) => (
                <BookingRequests bookingRequest={bookingRequest} key={bookingRequest.name} />
              ))} 

              {/*<tr>
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
              </tr>*/}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default BookLists;
