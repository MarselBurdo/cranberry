import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { funReducer } from "./funReducer";
import { goodsReducer } from "./goodsReducer";

export default combineReducers({
  goods: goodsReducer,
  auth: authReducer,
  fun: funReducer,
});
