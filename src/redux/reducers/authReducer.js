import { createReducer } from "@reduxjs/toolkit";
import { registration, login, logout } from "../actions";

export const authReducer = createReducer(
  { userName: null },
  {
    [registration.fulfilled]: (_, { payload }) => payload,
    [login.fulfilled]: (_, { payload }) => payload,
    [logout.fulfilled]: (_, { payload }) => payload,
  }
);
