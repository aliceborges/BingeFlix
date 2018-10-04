import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { fetchList, createList } from "./util/lists_api_util";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser, list: window.list }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
    delete window.list;
  } else {
    store = configureStore();
  }

  ///testing
  window.fetchList = fetchList;
  window.createList = createList;
  ///

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
