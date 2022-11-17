import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Img from "../Assets/Images1.png";
import Images from "../Assets/Images2.png";
import Imag from "../Assets/Images3.png";
import image from "../Assets/Images4.png";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
// import { Link } from "react-router-dom";

export default function List() {
  return (
    <>
      <Container>
        <label
          style={{
            color: "red",
            marginTop: "50px",
            fontWeight: "bold",
            fontSize: "20pt",
            marginLeft: "9rem",
          }}
        >
          Let's Gow Order Naw
        </label>
      </Container>

      <Stack direction="horizontal" gap={4} style={{ margin: "50px" }}>
        <Card style={{ width: "15rem", marginLeft: "16rem" }}>
          <Card.Img variant="top" src={Img} />
          <Card.Body style={{ backgroundColor: "#F3CFC6" }}>
            <Card.Title>Ice Coffe Green Tea</Card.Title>
            <Card.Text>RP.25.000</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={Images} />
          <Card.Body style={{ backgroundColor: "#F3CFC6" }}>
            <Card.Title>Ice Coffe Falm Sugar</Card.Title>
            <Card.Text>RP.20.000</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={Imag} />
          <Card.Body style={{ backgroundColor: "#F3CFC6" }}>
            <Card.Title>Ice Coffe Vanilla Sugar</Card.Title>
            <Card.Text>RP.23.000</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem", marginRight: "2px" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body style={{ backgroundColor: "#F3CFC6" }}>
            <Card.Title>Ice Coffe Chocolate</Card.Title>
            <Card.Text>RP.27.000</Card.Text>
          </Card.Body>
        </Card>
      </Stack>
    </>
  );
}
