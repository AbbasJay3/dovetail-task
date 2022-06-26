import { combineReducers } from "redux";
import setAllModsReducer from "./modsReducers";

const rootReducer = combineReducers({
  modsData: setAllModsReducer,
});

export default rootReducer;
