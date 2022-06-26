import React from "react";

import { wrapper } from "../store";

import "../pages/modsPage/modsStyles.css";
import "../pages/modPage/modStyles.css";
import "./styles.css";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

// export default MyApp;
export default wrapper.withRedux(MyApp);
