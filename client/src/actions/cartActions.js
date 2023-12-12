export const addToCart = (product, quantity) => (dispatch, getState) => {
  const cartItem = {
    name: product[0].name,
    _id: product[0]._id,
    price: product[0].price,
    countInStock: product[0].countInStock,
    quantity: quantity,
  };

  dispatch({ type: "ADD_TO_CART", payload: cartItem });

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().addToCartReducer.cartItems)
  );
};

export const initializeCart = () => (dispatch) => {
  const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

  dispatch({ type: "INITIALIZE_CART", payload: cartItems });
};
