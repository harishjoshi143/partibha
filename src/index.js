import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import StateProvider from "./context/StateProvider";
import AuthContext from "./context/AuthContext";
import FormContext from "./context/FormContext";
import HomeContext from "./context/HomeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider>
        <AuthContext>
          <FormContext>
            <HomeContext>
              <App />
            </HomeContext>
          </FormContext>
        </AuthContext>
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
