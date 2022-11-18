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
import Keranjang from "../Assets/Keranjang.png";
// import Popover from "react-bootstrap/Popover";
// import Man from "../Assets/Man.png";
// import Profil from "../Assets/Profill.png";
// import Panah from "../Assets/Panah.png";

function Navs() {
  const [showLogin, setLoginShow] = useState(false);
  const [showRegister, setRegisterShow] = useState(false);

  const loginData = JSON.parse(localStorage.getItem("VALUE_LOGIN"));

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
          {loginData === null ? (
            <Stack direction="horizontal" gap={3}>
              <Button
                variant="outline-danger"
                onClick={() => setLoginShow(true)}
              >
                Login
              </Button>
              <Button variant="danger" onClick={() => setRegisterShow(true)}>
                Register
              </Button>
              <Login
                show={showLogin}
                Hide={() => setLoginShow(false)}
                setlLoginShow={setLoginShow}
                setRegisterShow={setRegisterShow}
              />
              <Register
                show={showRegister}
                Hide={() => setRegisterShow(false)}
                setlLoginShow={setLoginShow}
                setRegisterShow={setRegisterShow}
              />
            </Stack>
          ) : (
            <>
              <img src={Keranjang} style={{ paddingRight: "50px" }}></img>
              <Drops />
            </>
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
