import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register({
  show,
  Hide,
  setRegisterShow,
  setLoginShow,
}) {
  const users = [];

  const [userData, setState] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const dataUser = JSON.parse(localStorage.getItem("USER_DATA"));

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (dataUser === null) {
      users.push(userData);
      localStorage.setItem("USER_DATA", JSON.stringify(users));
    } else {
      dataUser.forEach((element) => {
        users.push(element);
      });
      users.push(userData);
      localStorage.setItem("USER_DATA", JSON.stringify(users));
    }

    setRegisterShow(false);
    setLoginShow(true);
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
          className="text-danger fw-bold btn"
          style={{ fontSize: "36px" }}
          onClick={() => {
            setRegisterShow(false);
          }}
        >
          Register
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ height: "15rem", paddingLeft: "50px", paddingRight: "50px" }}
      >
        <Form onSubmit={handleOnSubmit}>
          <Form.Group
            className="mb-3"
            style={{ height: "50px" }}
            controlId="formBasicName"
          >
            <Form.Label></Form.Label>
            <Form.Control
              onChange={(e) => {
                setState({ ...userData, fullname: e.target.value });
              }}
              type="name"
              placeholder="Full Name"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group
            className="mb-3"
            style={{ height: "50px" }}
            controlId="formBasicEmail"
          >
            <Form.Label></Form.Label>
            <Form.Control
              onChange={(e) => {
                setState({ ...userData, email: e.target.value });
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
                setState({ ...userData, password: e.target.value });
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
              // onClick={}
              type="submit"
            >
              Register
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Link
          onClick={() => {
            setRegisterShow(false);
            setLoginShow(true);
          }}
          style={{ textDecoration: "none", color: "black", marginTop: "40px" }}
        >
          Already have an account ? Click <strong>Here</strong>
        </Link>
        {/* <p
          onClick={() => {
            setRegisterShow(false);
            setLoginShow(true);
          }}
          style={{ textDecoration: "none", marginTop: "3rem" }}
        >
          Don't have an acccount ? Klik
          <strong>Here</strong>
        </p> */}
      </Modal.Footer>
    </Modal>
  );
}
