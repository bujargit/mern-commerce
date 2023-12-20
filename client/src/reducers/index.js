import { combineReducers } from "redux";
import { getAllProductsReducer, getProductByIdReducer } from "./productReducer";
import { registerNewUserReducer, loginReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  cartReducer: cartReducer,
  registerNewUserReducer: registerNewUserReducer,
  loginReducer: loginReducer
});

export default rootReducer;
