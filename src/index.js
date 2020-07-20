import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import App from "./App";
// import { Switch } from "@material-ui/core";

const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects?????

firebase.initializeApp({
  apiKey: "AIzaSyDGvl8eaRTtLpXbgqtNACFH1ZihB43BWgA",
  authDomain: "shopping-cart-fd967.firebaseapp.com",
  databaseURL: "https://shopping-cart-fd967.firebaseio.com",
  projectId: "shopping-cart-fd967",
  storageBucket: "shopping-cart-fd967.appspot.com",
  messagingSenderId: "279962946228",
  appId: "1:279962946228:web:d93d2d292b26e0e04a65e1",
  measurementId: "G-GX4TFGLNKT"
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/app" component={App} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
