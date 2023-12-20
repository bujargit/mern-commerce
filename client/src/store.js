// import { getAllProductsReducer } from "./reducers/productReducer";
// import { combineReducers } from "redux";
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";

// const finalReducer = combineReducers({
//   getAllProductsReducer: getAllProductsReducer,
// });
// const composeEnhancers = composeWithDevTools({
//   //
// });

// const store = createStore(
//   finalReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );

import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import { initializeCart } from "./actions/cartActions";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  addToCartReducer: { cartItems: cartItems },
  loginReducer: { currentUser: currentUser },
};

const store = configureStore(
  { reducer: rootReducer },
  initialState,
  composeWithDevTools()
);

store.dispatch(initializeCart());

export default store;
