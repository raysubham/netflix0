import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import { firebase } from "../src/lib/firebase.prod";
import { FirebaseContext } from "./context/firebase";

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
