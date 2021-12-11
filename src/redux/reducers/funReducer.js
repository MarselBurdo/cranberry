import { createReducer } from "@reduxjs/toolkit";
import { funAction } from "../actions";

export const funReducer = createReducer([], {
  [funAction.fulfilled]: (_, { payload }) => payload,
});
