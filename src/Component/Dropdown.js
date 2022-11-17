import Stack from "react-bootstrap/Stack";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Man from "../Assets/Man.png";
import Profil from "../Assets/Profill.png";
import Keranjang from "../Assets/Keranjang.png";
import { Link } from "react-router-dom";

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>
      <Stack direction="horizontal" gap={3}>
        <img src={Man}></img>
        <Link to="/profile">
          <h5>Profill</h5>
        </Link>
      </Stack>
    </Popover.Body>
    <hr />
    <Popover.Body>
      <Stack direction="horizontal" gap={3}>
        <img src={Keranjang}></img>
        <h5>Logout</h5>
      </Stack>
    </Popover.Body>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <img src={Profil} style={{ width: "100px", borderRadius: "50px" }}></img>
  </OverlayTrigger>
);
export default Example;
