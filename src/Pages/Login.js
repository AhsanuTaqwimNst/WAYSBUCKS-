import { Button, Modal, Form } from "react-bootstrap";

export default function Login(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
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
        <Form>
          <Form.Group
            className="mb-3"
            style={{ height: "50px" }}
            controlId="formBasicEmail"
          >
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="Email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control type="Password" placeholder="Password" />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button
              className="text-white"
              variant="primary"
              size="lg"
              style={{ backgroundColor: "#BD0707" }}
              onClick={props.onStatus}
            >
              Login
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p href="#" style={{ textDecoration: "none", marginTop: "3rem" }}>
          Don't have an acccount ? Klik{" "}
          <strong style={{ fontWeight: "bold" }}>Here</strong>
          {/* <Link to onClick={props.onRegis} style={style.link}>
            Here
          </Link> */}
        </p>
      </Modal.Footer>
    </Modal>
  );
}
