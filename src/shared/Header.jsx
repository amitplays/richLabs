import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export default function Header() {
  return (
    <Navbar className="header" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">RichLabs.io</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="header-wrapper">
            <Nav.Link href="/">Services</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Careers</Nav.Link>
            <Nav.Link href="/">Insights</Nav.Link>
            <Nav.Link href="/">
              <Button variant="outline-success">Contact</Button>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
