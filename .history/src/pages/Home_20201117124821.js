import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Apartment from "../components/ApartmentLists";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Service from "../components/Service";
import data from "../homelist.data";

const Home = () => {

  return (
    <>
      <Header />
      <Banner />
      <Container>
        <div className="home-list-title text-center py-5">
          <p className="text-primary">House Rent</p>
          <h3>
            Discover the latest Rent <br />
            available today
          </h3>
        </div>
        <Row>
          {data.map((apartment) => (
            <Col key={apartment._id} sm={12} md={6} lg={4} xl={4}>
              <Apartment apartment={apartment} />
            </Col>
          ))}
        </Row>
        <Service />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
