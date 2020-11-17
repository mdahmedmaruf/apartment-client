import React from "react";
import { Button, Container, Form, FormControl, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className="banner-section py-5">
      <Container>
        <Row>
          <h1 className="text-light text-center mx-auto my-3 pt-5">
            FIND YOUR HOUSE RENT
          </h1>
        </Row>
        <Row>
          <Form className="search-form text-center mx-auto pb-5" inline>
            <FormControl
              type="text"
              placeholder="Search..."
              className="w-70 mr-lg-2 rounded-sm"
            />
            <Button className="bg-primary rounded-sm" type="submit">
              Find Now
            </Button>
          </Form>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
