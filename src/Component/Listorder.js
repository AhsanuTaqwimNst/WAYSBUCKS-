import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { useNavigate } from "react-router-dom";
import { products } from "./List";

function Product(props) {
  const navigate = useNavigate();
  return (
    <>
      <Card
        key={props.id}
        style={{ width: "15rem", marginLeft: "4rem" }}
        onClick={() => {
          navigate(`/product/${props.name}/${props.id}`);
        }}
      >
        <img variant="top" src={props.order} width="250px" />
        <Card.Body style={{ backgroundColor: "#F3CFC6", width: "250px" }}>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
export default function List() {
  return (
    <>
      <Container>
        <div>
          <label
            style={{
              color: "red",
              marginTop: "50px",
              fontWeight: "bold",
              fontSize: "20pt",
              marginLeft: "7rem",
            }}
          >
            Let's Gow Order Naw
          </label>
        </div>

        <Stack direction="horizontal" gap={1} style={{ margin: "50px" }}>
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              order={product.order}
              price={product.price}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
}

/* <Card style={{ width: "15rem", marginLeft: "16rem" }}>
            <Card.Img variant="top" src={Img} />
            <Card.Body style={{ backgroundColor: "#F3CFC6" }}>
              <Card.Title>Ice Coffe Green Tea</Card.Title>
              <Card.Text>RP.25.000</Card.Text>
            </Card.Body>
          </Card> */

/* <Card style={{ width: "15rem" }}>
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
        </Card> */

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
