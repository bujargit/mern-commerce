import axios from "axios";

export const getAllProducts = () => (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });

  axios
    .get("/api/products/getallproducts")
    .then((res) => {
      // console.log(res);
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCTS_FAILED", payload: err });
    });
};

export const getProductById = (id) => (dispatch) => {
  dispatch({ type: "GET_PRODUCTBYID_REQUEST" });

  axios
    .post("/api/products/getproductbyid", { id })
    .then((res) => {
      // console.log(res);
      dispatch({ type: "GET_PRODUCTBYID_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCTBYID_FAILED", payload: err });
    });
};

export const filterProducts = (searchKey, sortKey, category) => (dispatch) => {
  let filteredProducts;
  dispatch({ type: "GET_PRODUCTS_REQUEST" });

  axios
    .get("/api/products/getallproducts")
    .then((res) => {
      filteredProducts = res.data;

      if (searchKey) {
        filteredProducts = res.data.filter((product) => {
          return product.name.toLowerCase().includes(searchKey);
        });
      }
      if (sortKey !== "popular") {
        if (sortKey === "htl") {
          filteredProducts = res.data.sort((a, b) => {
            return -a.price + b.price;
          });
        } else {
          filteredProducts = res.data.sort((a, b) => {
            return a.price - b.price;
          });
        }
      }
      if (category !== "all") {
        filteredProducts = res.data.filter((product) => {
          return product.category.toLowerCase().includes(category);
        });
      }
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: filteredProducts });
    })
    .catch((err) => {
      dispatch({ type: "GET_PRODUCTS_FAILED" });
    });
};
