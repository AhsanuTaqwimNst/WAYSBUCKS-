import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navs from "./Component/Navbar";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Detailproduct from "./Pages/Detailproduct";
import Cart from "./Pages/Cart";
import Income from "./Component/Admin/Income";
import Transacti from "./Component/Admin/Transacti";
import Drops from "./Component/Admin/Drops";
import Add from "./Component/Admin/Add";
import Product from "./Component/Admin/Product";

function App() {
  return (
    <>
      <Router>
        <Navs />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/income" element={<Income />} />
          <Route path="/transacti" element={<Transacti />} />
          <Route path="/drops" element={<Drops />} />
          <Route path="/add" element={<Add />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:nama/:id/" element={<Detailproduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
