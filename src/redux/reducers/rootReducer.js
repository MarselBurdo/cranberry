import { combineReducers } from "redux";
import { goodsReducer } from "./goodsReducer";

export default combineReducers({
  goods: goodsReducer,
});
