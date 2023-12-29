// import axios from "axios";
import Product from "../components/Product";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filter from "../components/Filter";

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
      <Filter />
      <div className="row justify-content-start">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error error="Something went wrong..." />
        ) : (
          products.map((product) => {
            return (
              <div className="col-lg-3 col-md-6 p-3" key={product._id}>
                <div className="card p-3 text-start product__card">
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
