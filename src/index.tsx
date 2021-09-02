import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundary from './errorBoundary';
import './index.css';
//import {store} from './reduxeg/store';
import reportWebVitals from './reportWebVitals';

import Enter from './routing/enter';

ReactDOM.render(
  
  <React.StrictMode>
    <ErrorBoundary> 
    <Enter />
    </ErrorBoundary>
  </React.StrictMode>
 
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
