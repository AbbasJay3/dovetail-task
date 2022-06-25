import { combineReducers } from "redux";
import { setAllModsReducer } from "../reducers";

const rootReducer = combineReducers({
  modsData: setAllModsReducer,
});

export default rootReducer;
