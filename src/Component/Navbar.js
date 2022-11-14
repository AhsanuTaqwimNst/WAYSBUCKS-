import React from "react";
import Group from "./Group.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

function Navs() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Group} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Stack direction="horizontal" gap={3}>
            <Button variant="outline-danger">Login</Button>
            <Button variant="danger">Register</Button>
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
