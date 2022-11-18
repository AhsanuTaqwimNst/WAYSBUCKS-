import Card from "react-bootstrap/Card";
import Detail from "../Component/Listorder";

export default function Home() {
  return (
    <>
      <Card
        style={{
          display: "flex",
          alignItems: "start",
          width: "67rem",
          height: "400px",
          backgroundColor: "#BD0707",
          position: "relative",
          margin: "auto",
          marginTop: "50px",
          borderRadius: "10px",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Card.Img
          variant="right"
          src="https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg"
          style={{
            width: "32rem",
            position: "absolute",
            right: 0,
            left: 650,
            borderRadius: "10px",
          }}
        />
        <Card.Body
          style={{
            width: "50%",
            marginLeft: "20px",
            lineHeight: "1.5",
            lineClamp: "unset",
          }}
        >
          <Card.Title
            style={{ fontSize: "30pt", fontWeight: "bold", marginTop: "50px" }}
          >
            WAYSBUCKS
          </Card.Title>
          <Card.Text>
            Things are changing, but we're still here for you
          </Card.Text>
          <Card.Text>
            We have temporarily closed our in-store cafes, but select grocery
            and drive-thru locations remaining open. Waysbucks Drivers is also
            available
            <br></br>
            <br></br>
            Let's Order...
          </Card.Text>
        </Card.Body>
      </Card>

      <Detail />
    </>
  );
}
