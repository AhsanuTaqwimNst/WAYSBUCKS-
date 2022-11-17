import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navs from "./Component/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
// import Register from "./Pages/Register";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Navs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
