import { combineReducers } from "redux";
import { getAllProductsReducer, getProductByIdReducer } from "./productReducer";
import { registerNewUserReducer, loginReducer } from "./userReducer";
import { placeOrderReducer } from "./orderReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  cartReducer: cartReducer,
  registerNewUserReducer: registerNewUserReducer,
  loginReducer: loginReducer,
  placeOrderReducer: placeOrderReducer
});

export default rootReducer;
