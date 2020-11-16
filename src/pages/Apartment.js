import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import RequestBooking from "../components/RequestBooking";
import data from "../homelist.data";

const Apartment = ({ match }) => {
  const apartment = data.find((apart) => apart._id === match.params.id);
  return (
    <Container>
      <Row>
        <Col md={7}>
          <Image src={apartment.image} alt={apartment.name} />
          <div className="title-price overflow-hidden">
            <h3 className="float-left">{apartment.name}</h3>
            <h3 className="float-right"> ${apartment.price} </h3>
          </div>
          <p> {apartment.description} </p>
          <div className="price-details">
            <h4> Price Details- </h4>
            <p> {apartment.priceDetails} </p>
          </div>
          <div className="property-details">
            <h4> Property Details- </h4>
            <p> {apartment.propertyDetails} </p>
          </div>
        </Col>
        <Col md={5}>
          <RequestBooking />
        </Col>
      </Row>
    </Container>
  );
};

export default Apartment;
