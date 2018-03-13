/* eslint-disable import/default */

import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import configureStore, { history } from "./store/configureStore";
import Root from "./app/Root";
import "./styles/styles.sass";
import "./styles/bulma/bulma.sass";

require("./favicon.ico");

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById("app"),
);

if (module.hot) {
  module.hot.accept("./app/Root", () => {
    const NewRoot = require("./app/Root").default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById("app"),
    );
  });
}
