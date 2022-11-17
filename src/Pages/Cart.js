import React from "react";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";
import Rectangle from "../Assets/Rectangle 5.png";
import Stack from "react-bootstrap/Stack";
import Vector from "../Assets/Vector.png";
import Kotak from "../Assets/kotak.png";
import Kotakk from "../Assets/kotak2.png";

function Cart() {
  return (
    <Container>
      <h1
        style={{
          color: "#BD0707",
          marginLeft: "3px",
          marginTop: "20px",
          fontSize: "20px",
        }}
      >
        My Cart
      </h1>
      <p
        style={{
          color: "#BD0707",
          marginLeft: "3px",
          marginTop: "20px",
          fontSize: "20px",
        }}
      >
        Review Your Order
      </p>
      <hr style={{ width: "760px" }}></hr>
      <div>
        <Stack direction="horizontal" gap={3}>
          <img src={Rectangle}></img>
          <div>
            <Card.Title style={{ color: "#BD0707", fontSize: "15px" }}>
              Ice Coffe Palm Sugar
            </Card.Title>

            <p
              style={{ fontSize: "10px", color: "#BD0707", marginTop: "20px" }}
            >
              <strong style={{ color: "#974A4A" }}>Topping</strong> : Bill Berry
              Boba, Bubble Tea Gelatin
            </p>
          </div>
          <div
            style={{
              right: "45rem",
              position: "absolute",
              top: "15rem",
            }}
          >
            <p>Rp.33.000</p>
            <img
              src={Vector}
              style={{
                position: "absolute",
                right: "3px",
              }}
            ></img>
          </div>
        </Stack>
      </div>
      <div>
        <Stack direction="horizontal" gap={3}>
          <img src={Rectangle} style={{ marginTop: "20px" }}></img>
          <div>
            <Card.Title style={{ color: "#BD0707", fontSize: "15px" }}>
              Ice Coffe Palm Sugar
            </Card.Title>

            <p
              style={{ fontSize: "10px", color: "#BD0707", marginTop: "20px" }}
            >
              <strong style={{ color: "#974A4A" }}>Topping</strong> : Bill Berry
              Boba, Manggo
            </p>
          </div>
          <div
            style={{
              right: "720px",
              position: "absolute",
              top: "350px",
            }}
          >
            <p>Rp.36.000</p>
            <img
              src={Vector}
              style={{
                position: "absolute",
                right: "3px",
              }}
            ></img>
          </div>
        </Stack>
      </div>

      <hr style={{ width: "760px" }}></hr>

      <hr style={{ width: "330px", marginTop: "50px" }}></hr>

      <Stack direction="horizontal" gap={3}>
        <p style={{ color: "#BD0707" }}>Subtotal</p>
        <p
          style={{
            position: "absolute",
            right: "67rem",
            color: "#BD0707",
          }}
        >
          69.000
        </p>
      </Stack>

      <Stack direction="horizontal" gap={3}>
        <p style={{ color: "#BD0707" }}>Qty</p>
        <p
          style={{
            position: "absolute",
            right: "66rem",
            color: "#BD0707",
          }}
        >
          2
        </p>
      </Stack>

      <hr style={{ width: "330px", marginTop: "20px" }}></hr>

      <Stack direction="horizontal" gap={3}>
        <p style={{ color: "#BD0707", fontWeight: "bold" }}>Total</p>
        <p
          style={{
            position: "absolute",
            right: "67rem",
            color: "#BD0707",
            fontWeight: "bold",
          }}
        >
          69.000
        </p>
      </Stack>

      <div style={{ position: "absolute", right: "45rem", top: "32rem" }}>
        <Stack direction="horizontal" gap={3}>
          <img src={Kotak}></img>

          <input class="form-control" type="file" id="upload" hidden />
          <label for="upload">
            {" "}
            <img
              src={Kotakk}
              style={{ position: "absolute", left: "90px", top: "2rem" }}
            ></img>
          </label>

          <p
            style={{
              position: "absolute",
              left: "30px",
              top: "6rem",
            }}
          >
            Attache Of Transaction
          </p>
        </Stack>
      </div>

      <Form
        style={{
          width: "350px",
          position: "absolute",
          right: "10rem",
          top: "12rem",
        }}
      >
        <Form.Group
          className="mb-3"
          style={{ height: "50px" }}
          controlId="formBasicName"
        >
          <Form.Label></Form.Label>
          <Form.Control
            style={{
              background: "#E5E5E5",
              border: "2px solid #BD0707",
            }}
            type="name"
            placeholder="Name"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
            style={{
              background: "#E5E5E5",
              border: "2px solid #BD0707",
            }}
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          style={{ height: "50px" }}
          controlId="formBasicPhone"
        >
          <Form.Label></Form.Label>
          <Form.Control
            style={{
              background: "#E5E5E5",
              border: "2px solid #BD0707",
            }}
            type="number"
            placeholder="Phone"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group
          className="mb-3"
          style={{ height: "50px" }}
          controlId="formBasicPos  Code"
        >
          <Form.Label></Form.Label>
          <Form.Control
            style={{
              background: "#E5E5E5",
              border: "2px solid #BD0707",
            }}
            type="number"
            placeholder="Pos  Code"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group style={{ height: "5rem" }} controlId="address">
          <Form.Label></Form.Label>
          <Form.Control
            style={{
              paddingBottom: "5rem",
              background: "#E5E5E5",
              border: "2px solid #BD0707",
            }}
            type="address"
            placeholder="Address"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <div className="d-grid gap-2">
          <Button
            className="text-white"
            variant="primary"
            size="lg"
            style={{ backgroundColor: "#BD0707", marginTop: "80px" }}
          >
            Pay
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Cart;
