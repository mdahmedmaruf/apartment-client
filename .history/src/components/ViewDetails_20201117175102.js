import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import CommonBanner from './CommonBanner';
import Footer from './Footer';
import Header from './Header';
import loader from '../images/loader.gif';
const ViewDetails = () => {
    const {id} = useParams();
    const [apartment,setApartment] = useState([]);

  useEffect(()=>{
      fetch(`http://localhost:5000/exact-apartment/${id}`)
      .then(response => response.json())
      .then(data => setApartment(data))
  },[])

  const priceDetails = `Rent/Month: $550 (negotiable),
  Service Charge : 8,000/= Tk per month, subject to change,
  Security Deposit : 3 month’s rent,
  Flat Release Policy : 3 months earlier notice required`;

  const propertyDetails=`Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
  Flat Size : 3000 Sq Feet.
  Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
  Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
  Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
  Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera`;

    return (
        <>
    <Header />
      <CommonBanner />
      <Container>
        <Row className="my-5 py-5">
          <Col md={12}>
            {(apartment.length === 0) ? <img className='img-fluid w-30' src={loader}/> : <img className='img-fluid w-100' src={`data:image/jpeg;base64,${apartment[0]?.image.img}`} alt={apartment[0]?.title} />}
            <div className="title-price overflow-hidden mt-5">
             <h3 className="float-left">{apartment[0]?.title}</h3>
              <h3 className="float-right"> </h3>
            </div>
            <p> {apartment.description} </p>
            <div className="price-details">
              <h4> Price Details- </h4>
               <p>{priceDetails}</p>
            </div>
            <div className="property-details">
              <h4> Property Details- </h4>
              <p>{propertyDetails}</p>
            </div>
            </Col>
          </Row>
       </Container>
      <Footer/>
    </>
    );
};

export default ViewDetails;

//src={`data:image/jpeg;base64,${apartment[0]?.image.img}`}