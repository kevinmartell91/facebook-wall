import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from "redux";
import rootReducer from './redux/store'
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'authType',
  storage: storage,
  whitelist: ['auth', 'post']
}

const pReducer = persistReducer(persistConfig, rootReducer);
// apply redux-thunk middleware to our store
const store = createStore(pReducer, applyMiddleware(thunk));

persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
