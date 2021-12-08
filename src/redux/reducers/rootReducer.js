import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { goodsReducer } from "./goodsReducer";

export default combineReducers({
  goods: goodsReducer,
  auth: authReducer,
});
