'use strict';

import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from 'react-router-dom';

import App from "./App";
import './main.scss';
import './css/bootstrap-reboot.css';
import './css/bootstrap.css';
import './css/bootstrap-theme.css';


// ReactDOM.render(<Index />, document.getElementById("index"));
// ReactDOM.render(<Layout />, document.getElementById("app-container"));

const app = document.getElementById("app-container");

ReactDOM.render(

	  <HashRouter>
	     <App />
	  </HashRouter>,  app)