// import products from "../products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

const Productdescscreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const { loading, product, error } = useSelector(
    (state) => state.getProductByIdReducer
  );

  const addtocart = (e) => {
    // alert(quantity);
    dispatch(addToCart(product, quantity));
  };

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  return (
    <div className="container-fluid">
      {product &&
        product[0] &&
        product.map((product) => {
          return (
            <div key={product._id} className="row">
              {loading ? (
                <h1>Loading...</h1>
              ) : error ? (
                <h1>Something went wrong</h1>
              ) : (
                <>
                  <div className="col-md-6">
                    <div className="card p-5 m-2">
                      <h1>{product.name}</h1>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid m-3 bigImage"
                      />
                      <p>{product.description}</p>
                    </div>
                  </div>
                  <div className="col-md-6 text-start mt-3">
                    <div className="m-2">
                      <h1>Price: {product.price}</h1>
                      <hr />
                      <h1>Select quantity</h1>

                      <select
                        value={quantity}
                        onChange={(e) => {
                          setQuantity(e.target.value);
                        }}
                      >
                        {[...Array(product.countInStock).keys()].map((x, i) => {
                          return (
                            <option key={i} value={i + 1}>
                              {i + 1}
                            </option>
                          );
                        })}
                      </select>
                      <hr />
                      <button className="btn btn-dark" onClick={addtocart}>
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Productdescscreen;
