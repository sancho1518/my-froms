import React from "react";
import "./Home.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const home = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home" id="home">AWS Tech</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav>
              <Nav.Link href="#froms">Sing Up</Nav.Link>
              <Nav.Link href="#dispay-details">View Employee List</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="home">
        <h1>AWS TECH</h1>
        <h3>OUR MISSION</h3>
        <p>
          We provide lifecycle power solutions to enhance the business of our
          <br />
          customers, whilst creating better technologies that benefit both the
          <br />
          customer and the environment.
        </p>
      </div>
    </>
  );
};

export default home;