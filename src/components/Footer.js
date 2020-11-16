import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-5">
      <Container className="my-5">
        <Row>
          <Col sm={12} md={6} lg={3} xl={3}>
            <p className="text-white">
              <i className="fas fa-map-marker-alt mr-2"></i>
              H#340 (4th Floor), Road #24, <br />
              New DOHS, Mohakhali, Dhaka, Bangladesh <br />
              Phone: 018XXXXXXXX <br />
              E-mail: info@company.com <br />
            </p>
          </Col>
          <Col sm={12} md={6} lg={3} xl={3} className="footer-links">
            <h5 className="text-white">Company</h5>
            <ul>
              <li>
                <Link to="/about">About</Link>
                <Link to="/site-map">Site Map</Link>
                <Link to="/support-center">Support Center</Link>
                <Link to="/terms-condition">Terms Condition</Link>
                <Link to="/submit-listing">Submit Listing</Link>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={3} xl={3} className="footer-links">
            <h5 className="text-white">Quick Links</h5>
            <ul>
              <li>
                <Link to="/quick-links">Quick Links</Link>
                <Link to="/site-map">rentals</Link>
                <Link to="/support-center">Sales</Link>
                <Link to="/terms-condition">Contact</Link>
                <Link to="/submit-listing">Our blog</Link>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={6} lg={3} xl={3}>
            <h5 className="text-white">About Us</h5>
            <p className="text-white">
              We are the top real estate <br />
              agency in Sydney, with agents <br />
              available to answer any <br />
              question 24/7.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
