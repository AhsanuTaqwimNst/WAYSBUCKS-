import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Toping1 from "../Assets/Toping1.png";
import Toping2 from "../Assets/Toping2.png";
import Toping3 from "../Assets/Toping3.png";
import Toping4 from "../Assets/Toping4.png";
import Toping5 from "../Assets/Toping5.png";
import Toping6 from "../Assets/Toping6.png";
import Toping7 from "../Assets/Toping7.png";
import Toping8 from "../Assets/Toping8.png";
import { useParams } from "react-router-dom";
import { products } from "../Component/List";

const style = {
  card: {
    width: "100%",
    height: "500px",
    position: "relative",
  },

  imgProduct: {
    width: "30%",
    height: "80%",
  },

  cardBody: {
    width: "50%",
  },

  cardTitle: {
    fontFamily: "Freight",
    fontStyle: "Sans Black SC",
    fontSize: "47px",
    lineHeight: "100%",
    align: "Left",
    verticalAlign: "Top",
    color: "#BD0707",
  },

  cardText: {
    color: "#974A4A",
  },

  textToping: {
    color: "#BD0707",
  },

  imgToping: {
    width: "25%",
    height: "auto",
  },

  bgColor: {
    backgroundColor: "#BD0707",
  },
};
function DetailProduct() {
  const { id } = useParams();

  return (
    <Container className="my-5 w-90">
      <Card border="light" style={style.card}>
        <Row>
          <Card.Img style={style.imgProduct} src={products[id].order} />

          <Card.Body className="my-2" style={style.cardBody}>
            <Col>
              <Card.Title style={style.cardTitle}>
                {products[id].name}
              </Card.Title>
              <Card.Text style={style.cardText}>
                Rp{products[id].price}
              </Card.Text>
              <div className="mt-5">
                <Card.Text style={style.cardText}>Toping</Card.Text>
                <Row xs="4" className="m-2">
                  <div>
                    <Card.Img style={style.imgToping} src={Toping1} />
                    <Card.Text style={style.textToping}>
                      Bubble Tea Gelatin
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Img style={style.imgToping} src={Toping2} />
                    <Card.Text style={style.textToping}>Manggo</Card.Text>
                  </div>
                  <div>
                    <Card.Img style={style.imgToping} src={Toping3} />
                    <Card.Text style={style.textToping}>
                      Green Coconut
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Img style={style.imgToping} src={Toping4} />
                    <Card.Text style={style.textToping}>Boba Manggo</Card.Text>
                  </div>
                </Row>
                <Row xs="4" className="m-2">
                  <div>
                    <Card.Img style={style.imgToping} src={Toping5} />
                    <Card.Text style={style.textToping}>
                      Bill Berry Boba
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Img style={style.imgToping} src={Toping6} />
                    <Card.Text style={style.textToping}>
                      Kiwi Popping Pearl
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Img style={style.imgToping} src={Toping7} />
                    <Card.Text style={style.textToping}>
                      Matcha Cantaloupe
                    </Card.Text>
                  </div>
                  <div>
                    <Card.Img style={style.imgToping} src={Toping8} />
                    <Card.Text style={style.textToping}>
                      Strawberry Popping
                    </Card.Text>
                  </div>
                </Row>
              </div>
              <Row className="m-4">
                <Col xs={12} md={10}>
                  <Card.Text style={style.cardText}>Total</Card.Text>
                </Col>
                <Col xs={6} md={2}>
                  <Card.Text style={style.cardText}>Rp.27.000</Card.Text>
                </Col>
              </Row>
              <Button
                className="w-100"
                variant="outline-light"
                style={style.bgColor}
              >
                Add Cart
              </Button>
            </Col>
          </Card.Body>
        </Row>
      </Card>
    </Container>
  );
}

export default DetailProduct;
