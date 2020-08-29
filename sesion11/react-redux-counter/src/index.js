import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './view/App';
import { createStore } from 'redux'
import counter from './reducers'

const store = createStore(
  counter
)

const render = () => ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
)

render()
store.subscribe(render)
