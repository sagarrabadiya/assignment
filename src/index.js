import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CreateStore from "./redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const initialState = {};

const store = CreateStore(initialState);

ReactDOM.render(
  <Provider store={store} key="provider">
    <App />
  </Provider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    ReactDOM.render(
      <Provider store={store} key="provider">
        <NextApp />
      </Provider>,
      document.getElementById("root")
    );
  });
}

registerServiceWorker();
