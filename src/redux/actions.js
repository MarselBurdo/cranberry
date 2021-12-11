import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { network } from "../apis/network.apis";

export const addItemByGoods = createAction("ADD_ITEMS_BY_GOODS");

export const registration = createAsyncThunk(
  "AUTH_REGISTRATION",
  async (formData) => {
    const regResult = await network.post({
      url: "/registration",
      data: formData,
    });
    return regResult;
  }
);

export const login = createAsyncThunk("AUTH_LOGIN", async (formData) => {
  const regResult = await network.post({
    url: "/login",
    data: formData,
  });

  return regResult;
});

export const logout = createAsyncThunk("AUTH_LOGOUT", async () => {
  const regResult = await network.post({
    url: "/logout",
    data: {},
  });

  return regResult;
});

export const funAction = createAsyncThunk("FUN_CHARACTERS", async () => {
  const funResult = await network.get({
    url: "https://rickandmortyapi.com/api/character",
  });
  return funResult.results;
});
