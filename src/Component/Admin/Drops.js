import Stack from "react-bootstrap/Stack";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Karah from "../../Assets/Karah.png";
import Profil from "../../Assets/Profill.png";
import Botol from "../../Assets/Botol.png";
import Panah from "../../Assets/Panah.png";

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>
      <Stack direction="horizontal" gap={3}>
        <img src={Karah}></img>
        <h5>Add Product</h5>
      </Stack>
    </Popover.Body>
    <Popover.Body>
      <Stack direction="horizontal" gap={3}>
        <img src={Botol}></img>
        <h5>Add Toping</h5>
      </Stack>
    </Popover.Body>
    <hr />
    <Popover.Body>
      <Stack direction="horizontal" gap={3}>
        <img src={Panah}></img>
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
