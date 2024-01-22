import axios from "axios";

export const placeOrder = (token, subtotal) => (dispatch, getState) => {
  const currentUser = getState().loginReducer.currentUser;
  const demoItems = getState().cartReducer.cartItems;

  const cartItems = demoItems.map((item) => ({
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    _id: item._id,
  }));

  dispatch({ type: "PLACE_ORDER_REQUEST" });

  axios
    .post("/api/orders/placeorder", {
      token,
      subtotal,
      currentUser,
      cartItems,
    })
    .then((res) => {
      dispatch({ type: "PLACE_ORDER_SUCCESS" });
      console.log(res);
    })
    .catch((err) => {
      dispatch({ type: "PLACE_ORDER_FAILED" });
    });
};