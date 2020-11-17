import React, { useContext } from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { UserContext } from "../App";
import logo from "../images/Logo.png";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <header>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="" />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/services">
                <Nav.Link>Services</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/concerns">
                <Nav.Link>Concerns</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/event">
                <Nav.Link>Event</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              {loggedInUser.email ? (
                <>
                  <Dropdown>
                    <Dropdown.Toggle className="bg-transparent text-dark">
                      {loggedInUser.name}
                      <span className="profile-pic">
                        <img src={loggedInUser.photo} alt="login-user-pic" />
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <LinkContainer to="/dashboard">
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                      </LinkContainer>
                      <Dropdown.Item onClick={() => setLoggedInUser({})}>
                        Sign Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link className="login-button bg-primary text-white rounded-sm">
                    Login
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
