import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ApartmentList = ({ apartment }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/apartment/${apartment._id}`}>
        <Card.Img src={`data:image/jpeg;base64,${apartment.image.img}`} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/apartment/${apartment._id}`}>
          <Card.Title className="apartment-title">{apartment.title}</Card.Title>
        </Link>
        <Card.Text className="place-name">
          <i className="fas fa-map-marker-alt"></i> {apartment.location}
        </Card.Text>
        <div className="top-link overflow-hidden mb-3">
          <Card.Link className="bedroom float-left">
            <i className="fas fa-bed"></i> {apartment.bedroom} Bedroom
          </Card.Link>
          <Card.Link className="bathroom float-right">
            <i className="fas fa-bath"></i> {apartment.bathroom} Bathroom
          </Card.Link>
        </div>
        <div className="bottom-links">
          <Card.Link className="price text-primary float-left">
            $ {apartment.price}
          </Card.Link>
          <Link to={`/apartment/${apartment._id}`}>
            <Card.Link className="details-button float-right bg-primary text-white py-2 px-3">
              View Details
            </Card.Link>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ApartmentList;
