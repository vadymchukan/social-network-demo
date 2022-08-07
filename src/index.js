import React from "react";
import reportWebVitals from './reportWebVitals';

import ReactDOM from 'react-dom/client';
import './index.css';


import SamurajJsApp from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <SamurajJsApp/>
  );




//rerenderEntireTree(store.getState());
// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
