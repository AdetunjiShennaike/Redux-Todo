import React from 'react';
import ReactDOM from 'react-dom';

//style sheet
import './index.css';

//component
import App from './App';
import todos from './reducers/App'

//redux component for creating store
import { createStore } from 'redux';

//react redux component to tell the store where its passing props/state
import { Provider } from 'react-redux';


let store = createStore(todos)

console.log(todos)

ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


