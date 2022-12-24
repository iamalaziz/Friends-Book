import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheet/index.scss";
import App from "./App";
import UsersProvider from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UsersProvider>
    <App />
  </UsersProvider>
);
