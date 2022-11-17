import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Group from "../Assets/Group.png";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { Link } from "react-router-dom";
import Drops from "./Dropdown";

function Navs() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
              <img src={Group} />
            </Link>
          </Nav>
          {showStatus ? (
            <Drops />
          ) : (
            // <div>
            //   <Link to="/profile">Profill</Link>
            //   <Button
            //     variant="outline-succes"
            //     onClick={() => setShowStatus(false)}
            //   >
            //     Berhasil
            //   </Button>
            //
            // </div>
            <Stack direction="horizontal" gap={3}>
              <Button
                variant="outline-danger"
                onClick={() => setShowLogin(true)}
              >
                Login
              </Button>
              <Button variant="danger" onClick={() => setShowRegister(true)}>
                Register
              </Button>
              <Login
                show={showLogin}
                onStatus={() => setShowLogin(false) & setShowStatus(true)}
                // onRegis={() => setShowLogin(false) & setShowRegister(true)}
                onHide={() => setShowLogin(false)}
              />
              <Register
                show={showRegister}
                // onLogin={() => setShowRegister(false) & setShowLogin(true)}
                onHide={() => setShowRegister(false)}
              />
            </Stack>
          )}
          {/* <Stack direction="horizontal" gap={3}>
            <Button variant="outline-danger" onClick={() => setShowLogin(true)}>
              Login
            </Button>
            <Button variant="danger" onClick={() => setShowRegister(true)}>
              Register
            </Button>
            <Login
              show={showLogin}
              // onRegis={() => setShowLogin(false) & setShowRegister(true)}
              onHide={() => setShowLogin(false)}
            />
            <Register
              show={showRegister}
              // onLogin={() => setShowRegister(false) & setShowLogin(true)}
              onHide={() => setShowRegister(false)}
            />
          </Stack> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
