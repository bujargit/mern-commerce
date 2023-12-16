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
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const initializeCart = () => (dispatch) => {
  const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

  dispatch({ type: "INITIALIZE_CART", payload: cartItems });
};

export const changeCartItemQuantity =
  (itemId, newQuantity) => (dispatch, getState) => {
    const updatedCartItems = getState().cartReducer.cartItems.map((item) =>
      item._id === itemId ? { ...item, quantity: newQuantity } : item
    );

    dispatch({ type: "CHANGE_CART_ITEM_QUANTITY", payload: updatedCartItems });

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

// export const deleteFromCart = (item) => (dispatch) => {
//   dispatch({ type: "DELETE_FROM_CART", payload: item });
//   localStorage.removeItem("cartItems", JSON.stringify("cartItems"));
// };

export const deleteFromCart = (itemId) => (dispatch, getState) => {
  const updatedCartItems = getState().cartReducer.cartItems.filter(
    (cartItem) => cartItem._id !== itemId._id
  );

  dispatch({ type: "DELETE_FROM_CART", payload: updatedCartItems });

  localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
};
