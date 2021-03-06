"use strict";

import React from "react";
import { Provider } from 'react-redux'

import { addArticle, removeArticle } from "./actions/index";
import List from "./components/List";
import Form from "./components/Form";
import store from "./store";

import "./main.scss";

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <Provider store={store}>
          <div className="col-xs-12">
            <div className="col-xs-12 col-sm-6">
              <h2 className="col-xs-12 nop">Articles</h2>
              <List />
            </div>
            <div className="col-xs-12 col-sm-6">
              <h2 className="col-xs-12 nop" >Add a new article</h2>
              <Form />
            </div>
          </div>
      </Provider>
    );
  }
}
