import { createReducer } from "@reduxjs/toolkit";
import { addItemByGoods } from "../actions";

export const goodsReducer = createReducer([], {
  [addItemByGoods]: (state, { payload }) => [...state, payload],
});
