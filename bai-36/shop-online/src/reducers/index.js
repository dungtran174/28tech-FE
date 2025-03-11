import { combineReducers } from "redux";
import cartReducer from "./cart";

const allReducers = combineReducers({
  cartReducer
  // thêm các reducer khác vào đây
});

export default allReducers;