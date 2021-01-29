import { combineReducers } from "redux";
import { productsReducer } from "./proudctsReducer";
import { cartReducer } from "./cartReducers";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
export default rootReducer;

export type RootStateType = ReturnType<typeof rootReducer>;
