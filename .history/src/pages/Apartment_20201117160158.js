import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CommonBanner from "../components/CommonBanner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RequestBooking from "../components/RequestBooking";
import data from "../homelist.data";

const Apartment = ({ match }) => {
   const {id} = useParams();

  //const apartment = data.find((apart) => apart._id === match.params.id);
  //const apartment = data.find((apart) => apart._id === id);
  
  const [apartment,setApartment] = useState({});


  useEffect(()=>{
      fetch(`http://localhost:5000/exact-apartment/${id}`)
      .then(response => response.json())
      .then(data => setApartment(data))
  },[])
  
  console.log(apartment)

  return (
    <>
      <Header />
      <CommonBanner />
      <Container>
        <Row className="my-5 py-5">
          <Col md={7}>
            <Image src={apartment.image} alt={apartment.name} />
            <div className="title-price overflow-hidden mt-5">
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
      <Footer />
    </>
  );
};

export default Apartment;
