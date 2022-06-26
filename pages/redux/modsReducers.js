import { actionTypes } from "../constants";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  mods: [],
  isLoading: true,
};

const setAllModsReducer = (state = initialState, action) => {
  switch (action.type) {
    // if persistent was successful, something like this would hydrate the page
    case HYDRATE:
      return { ...state, ...action.payload };

    case actionTypes.SET_ALL_MODS:
      return {
        mods: action.payload,
        isLoading: false,
      };

    case actionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
  }
  return state;
};

export default setAllModsReducer;
