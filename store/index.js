import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import rootReducer from "../pages/redux/reducers";

const store = () =>
  configureStore({
    reducer: rootReducer,
  });

// export default store;
export const wrapper = createWrapper(store);
