import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import servicedata from "../servicelist.data";

const Service = () => {
  return (
    <>
      <div className="service-list-title text-center py-5">
        <p className="text-primary">Sercie</p>
        <h3>
          We're an agency tailored to all <br />
          clients' needs that always delivers
        </h3>
      </div>
      <Row>
        {servicedata.map((service) => (
          <Col sm={12} md={6} lg={4} xl={4}>
            <Card className="service-lists text-center mb-5">
              <Card.Img variant="top" src={service.image} />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Service;
