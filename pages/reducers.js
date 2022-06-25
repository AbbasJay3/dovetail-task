export const setAllModsReducer = (state = { mods: [] }, action) => {
  if (action.type === "SET_ALL_MODS") {
    return {
      mods: action.payload,
    };
  }
  return state;
};
