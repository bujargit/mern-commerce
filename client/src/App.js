import "./App.css";
import { Routes, Route } from "react-router-dom";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Productdescscreen from "./screens/Productdescscreen";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homescreen />} exact />
        <Route path="/product/:id" element={<Productdescscreen />} exact />
        <Route path="/cart" element={<Cartscreen />} exact />
        <Route path="/register" element={<Registerscreen />} exact />
        <Route path="/login" element={<Loginscreen />} exact />
      </Routes>
    </div>
  );
}

export default App;
