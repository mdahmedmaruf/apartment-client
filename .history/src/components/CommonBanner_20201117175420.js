import React from "react";
import { Container, Row } from "react-bootstrap";

const CommonBanner = () => {
  return (
    <section className="banner-section py-5">
      <Container>
        <Row>
          <h1 className="text-light text-center mx-auto my-3 py-5">
            Apartment
          </h1>
        </Row>
      </Container>
    </section>
  );
};

export default CommonBanner;
