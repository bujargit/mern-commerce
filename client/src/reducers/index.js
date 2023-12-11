import { combineReducers } from "redux";
import { getAllProductsReducer, getProductByIdReducer } from "./productReducer";
import { addToCartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  addToCartReducer: addToCartReducer,
});

export default rootReducer;
