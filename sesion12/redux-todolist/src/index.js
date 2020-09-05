import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import reducer from './reducers'
import App from './App';

const store = configureStore({
  reducer
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    ∫∫</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);