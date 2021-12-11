import { attachTypeApi } from "antd/lib/message";

export const getGoodsToTable = (state) => state.goods;

export const getUserName = (state) => state.auth.userName;

export const getFunCharacters = (state) => state.fun;
