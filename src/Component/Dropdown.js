import Stack from "react-bootstrap/Stack";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Man from "../Assets/Man.png";
import Profil from "../Assets/Profill.png";
import Panah from "../Assets/Panah.png";
import { Link } from "react-router-dom";

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>
      <Stack direction="horizontal" gap={3}>
        <img src={Man}></img>
        <Link to="/profile" style={{ color: "black", textDecoration: "none" }}>
          <h5>Profill</h5>
        </Link>
      </Stack>
    </Popover.Body>
    <hr />
    <Popover.Body>
      <Stack direction="horizontal" gap={3}>
        <img src={Panah}></img>
        <Link to="/cart" style={{ color: "black", textDecoration: "none" }}>
          <h5>Logout</h5>
        </Link>
      </Stack>
    </Popover.Body>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <img src={Profil} style={{ width: "80px", borderRadius: "50px" }}></img>
  </OverlayTrigger>
);
export default Example;

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
