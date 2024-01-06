import "./App.css";
import { Routes, Route } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Productdescscreen from "./screens/Productdescscreen";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Homescreen />} exact />
          <Route path="/product/:id" element={<Productdescscreen />} exact />
          <Route path="/cart" element={<Cartscreen />} exact />
          <Route path="/register" element={<Registerscreen />} exact />
          <Route path="/login" element={<Loginscreen />} exact />
        </Routes>
        <div style={{ flex: "1" }}></div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
