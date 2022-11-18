import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import Rectangle from "../../Assets/Rectangle 5.png";

function Product() {
  return (
    <Container>
      <h1
        style={{
          color: "red",
          marginLeft: "80px",
          marginTop: "10rem",
          fontSize: "20px",
        }}
      >
        Product
      </h1>

      <div
        style={{
          width: "40%",
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicName Product">
          <Form.Label></Form.Label>
          <Form.Control
            style={{ background: "#E5E5E5", border: "2px solid #BD0707" }}
            type="text"
            placeholder="Name Product"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label></Form.Label>
          <Form.Control
            style={{ background: "#E5E5E5", border: "2px solid #BD0707" }}
            type="text"
            placeholder="Price"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhotoProduct">
          <Form.Label></Form.Label>
          <Form.Control
            style={{ background: "#E5E5E5", border: "2px solid #BD0707" }}
            type="text"
            placeholder="Photo Product"
          />
        </Form.Group>
        <Button
          className="text-white"
          style={{
            backgroundColor: "#BD0707",
            width: "80%",
            marginLeft: "40px",
            marginTop: "30px",
          }}
        >
          Add Product
        </Button>

        <div>
          <img
            src={Rectangle}
            style={{
              position: "absolute",
              width: "300px",
              left: "60rem",
              top: "10rem",
            }}
          ></img>
        </div>
      </div>
    </Container>
  );
}

export default Product;
