import React from "react";
import ReactDOM from 'react-dom/client';

import { Provider } from "react-redux";

import {store} from "./redux-og";
// import store from "./redux-toolkit";

import "./index.css";
import App from "./App";

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);