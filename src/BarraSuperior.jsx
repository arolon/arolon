import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function BarraSuperior() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">AFRA</Navbar.Brand>
        <Navbar.Toggle aria-controls="opciones" />
        <Navbar.Collapse id="opciones">
          <Nav className="mr-auto justify-content-end">
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarraSuperior;
