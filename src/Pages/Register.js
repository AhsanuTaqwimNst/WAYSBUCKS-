import { Button, Modal, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";

export default function Register(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="text-danger fw-bold"
          style={{ fontSize: "36px" }}
        >
          Register
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{ height: "15rem", paddingLeft: "50px", paddingRight: "50px" }}
      >
        <Form>
          <Form.Group
            className="mb-3"
            style={{ height: "50px" }}
            controlId="formBasicName"
          >
            <Form.Label></Form.Label>
            <Form.Control type="name" placeholder="Full Name" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

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
            >
              Register
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <p href="#" style={{ textDecoration: "none", marginTop: "3rem" }}>
          Don't have an acccount ? Klik{" "}
          <strong onClick={props.onLogin} style={{ fontWeight: "bold" }}>
            Here
          </strong>
        </p>
      </Modal.Footer>
    </Modal>
  );
}
