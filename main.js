import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';


import App from './components/App.jsx';


import { default as widgetActions } from './actions/widget_actions.js';
import { widgetsApp } from './reducers/widgets_reducers.js';


let store = createStore(widgetsApp);
let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(widgetActions.createWidget({
  name: 'My Widget',
  price: 1.00
}));

store.dispatch(widgetActions.updateWidget({
  id: 1,
  name: 'Updated!',
  price: 1.00
}));

store.dispatch(widgetActions.deleteWidget({
  id: 1
}));

console.log('Final', store.getState());

unsubscribe();


ReactDOM.render(
  <App />,
  document.getElementById('app')
);



