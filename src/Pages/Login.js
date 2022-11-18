import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login({ show, Hide, setRegisterShow, setLoginShow }) {
  const users = [];

  const [userLogin, setState] = useState({
    email: "",
    password: "",
  });

  let storage = JSON.parse(localStorage.getItem("USER_DATA"));

  const handleOnSubmit = (e) => {
    e.preventDefault();
    storage.forEach((element) => {
      if (
        userLogin.email === element.email &&
        userLogin.password === element.password
      ) {
        users.push(userLogin);
        localStorage.setItem("VALUE_LOGIN", JSON.stringify(users));
        setLoginShow(false);
      } else {
        console.log(users);
      }
    });
  };

  return (
    <Modal
      show={show}
      onHide={Hide}
      onSubmit={Hide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-danger fw-bold"
          style={{ fontSize: "36px" }}
        >
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ height: "15rem", paddingLeft: "50px", paddingRight: "50px" }}
      >
        <Form onSubmit={handleOnSubmit}>
          <Form.Group
            className="mb-3"
            style={{ height: "50px" }}
            controlId="formBasicEmail"
          >
            <Form.Label></Form.Label>
            <Form.Control
              onChange={(e) => {
                setState({ ...userLogin, email: e.target.value });
              }}
              type="email"
              placeholder="Email"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control
              onChange={(e) => {
                setState({ ...userLogin, password: e.target.value });
              }}
              type="Password"
              placeholder="Password"
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button
              className="text-white"
              variant="primary"
              size="lg"
              style={{ backgroundColor: "#BD0707" }}
              // onClick={props.onStatus}
              type="submit"
            >
              Login
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Link
          onClick={() => {
            setRegisterShow(true);
            setLoginShow(false);
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          Already have an account ? Click <strong>Here</strong>
        </Link>
        {/* <p href="#" style={{ textDecoration: "none", marginTop: "3rem" }}>
          Don't have an acccount ? Klik
          <strong
            onClick={() => {
              setLoginShow(false);
              setRegisterShow(true);
            }}
          >
            Here
          </strong>
        </p> */}
      </Modal.Footer>
    </Modal>
  );
}
