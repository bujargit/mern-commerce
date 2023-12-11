// import axios from "axios";
import Product from "../components/Product";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";

const Homescreen = () => {
  // const getallproductsstate = useSelector((state) => state.getallproductsstate);

  const { loading, products, error } = useSelector(
    (state) => state.getAllProductsReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="container py-3">
      <div className="row justify-content-start">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          products.map((product) => {
            return (
              <div className="col-lg-3 col-md-6 p-3" key={product._id}>
                <div className="card p-3 text-start">
                  <Product product={product} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Homescreen;
