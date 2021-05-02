import React from 'react';
import {HashRouter, Route} from 'react-router-dom'
import './index.css';
import Login from './login';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Route exact path="/" component={Login}/>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
