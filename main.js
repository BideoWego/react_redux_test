import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App.jsx';
import { widgetsApp } from './reducers/widgets_reducers.js';
import { default as widgets } from './data/widgets.json';

let store = createStore(widgetsApp, { widgets });

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);



