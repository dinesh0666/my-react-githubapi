import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from "@reach/router";
import Followers from './components/Followers';
import Repos from './components/Repos';
import Followings from './components/Followings';




ReactDOM.render(
    <Router>
    <App path="/" />
    <Followers path="/followers/:username" />
    <Repos path="/repos/:username"/>
    <Followings path="/followings/:username" />
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
