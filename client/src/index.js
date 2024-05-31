import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// App 컴포넌트와 Redux를 연결하기위한 Provider를 가져온다.
import { Provider } from "react-redux";
// promise와 function을 Redux Store에서 관리하기 위한 redux-promise와 redux-thunk에서 
// promiseMiddleware, thunk를 가져온다. 
import promiseMiddleware from "redux-promise";
import { thunk } from 'redux-thunk';

import { BrowserRouter } from 'react-router-dom';


// Store 생성과 middleware를 적용하기 위해 applyMiddleware와 createStore를 가져온다.
import { applyMiddleware, createStore } from 'redux';

// Store에 관리되는 reducer들을 가져온다
import Reducer from "./_reducer";

//Redux를 위한 Store를 생성한다. Reducer정보와 Chrom Extention을 위한 정보를 생성시 전달한다.     
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={createStoreWithMiddleware(Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
      <App />
    </Provider>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

