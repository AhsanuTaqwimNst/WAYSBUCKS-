import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import Rectangle from "../../Assets/Rectangle 5.png";
import Group from "../../Assets/Group-2.png";
import Barcoud from "../../Assets/Barcoud.png";

export default function Transacti() {
  return (
    <Row>
      <Card
        style={{
          border: "white",
          width: "470px",
          marginTop: "50px",
          marginLeft: "200px",
        }}
      >
        <Row>
          <Card style={{ border: "white", background: "#F6DADA" }}>
            <Stack direction="horizontal" gap={1}>
              <Card.Img
                style={{ width: "80px", height: "90px" }}
                src={Rectangle}
              />

              <Col>
                <Card.Body>
                  <Card.Title style={{ color: "red", fontSize: "15px" }}>
                    Ice Coffe Palm Sugar
                  </Card.Title>
                  <Card.Text style={{ color: "#974A4A", fontSize: "10px" }}>
                    <strong style={{ color: "#BD0707" }}>Saturday</strong>,5
                    March 2020
                  </Card.Text>
                  <p style={{ fontSize: "10px", color: "red" }}>
                    <strong style={{ color: "#974A4A" }}>Topping</strong> : Bill
                    Berry Boba, Bubble Tea Gelatin
                  </p>
                  <p style={{ fontSize: "10px", color: "#BD0707" }}>
                    Price : 33.000
                  </p>
                </Card.Body>
              </Col>
              <img src={Group} style={{ marginBottom: "50px" }}></img>
            </Stack>

            <Stack direction="horizontal" gap={1}>
              <Card.Img
                style={{ width: "80px", height: "90px", marginBottom: "80px" }}
                src={Rectangle}
              />

              <Col>
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title style={{ color: "red", fontSize: "15px" }}>
                        Ice Coffe Palm Sugar
                      </Card.Title>
                      <Card.Text style={{ color: "#974A4A", fontSize: "10px" }}>
                        <strong style={{ color: "#BD0707" }}>Saturday</strong>,5
                        March 2020
                      </Card.Text>
                      <p style={{ fontSize: "10px", color: "red" }}>
                        <strong style={{ color: "#974A4A" }}>Topping</strong> :
                        Bill Berry Boba, Manggo
                      </p>
                      <p style={{ fontSize: "10px", color: "#BD0707" }}>
                        Price : 36.000
                      </p>
                    </Col>
                    <img
                      src={Barcoud}
                      style={{
                        marginBottom: "60px",
                        width: "30%",
                        position: "absolute",
                        top: "120px",
                        left: "330px",
                      }}
                    ></img>

                    <div>
                      <p
                        style={{
                          fontSize: "10px",
                          color: "#FF9900",
                          position: "absolute",
                          top: "250px",
                          left: "370px",
                          border: "5px solid #FF9900",
                          borderRadius: "15px",
                        }}
                      >
                        Waiting Approve
                      </p>
                    </div>
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                        paddingLeft: "255px",
                        color: "#974A4A",
                      }}
                    >
                      Sub Total : 69.000
                    </p>
                  </Row>
                </Card.Body>
              </Col>
            </Stack>
          </Card>
        </Row>
      </Card>
    </Row>
  );
}
