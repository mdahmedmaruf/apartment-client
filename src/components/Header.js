import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../images/Logo.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Services</Nav.Link>
              <Nav.Link href="#link">Concerns</Nav.Link>
              <Nav.Link href="#link">Event</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link
                href="#link"
                className="login-button bg-primary text-white rounded-sm"
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
