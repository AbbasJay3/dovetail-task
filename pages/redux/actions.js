import { actionTypes } from "../constants";

export const setAllMods = (payload) => ({
  type: actionTypes.SET_ALL_MODS,
  payload,
});

export const isLoading = (payload) => ({
  type: actionTypes.IS_LOADING,
  payload,
});
