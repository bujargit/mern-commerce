import { combineReducers } from "redux";
import { getAllProductsReducer, getProductByIdReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  cartReducer: cartReducer,
});

export default rootReducer;
