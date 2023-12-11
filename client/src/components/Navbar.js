import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.addToCartReducer);

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            REA'S SHOP            
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mainnav-links">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>{" "}
                  {cartItems.length}                  
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
