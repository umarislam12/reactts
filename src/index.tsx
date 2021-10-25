//@ts-nocheck
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ErrorBoundary from "./errorBoundary";
import "./index.css";
import { store } from "./redux/store";
//import {store} from './reduxeg/store';
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import Enter from "./routing/enter";
import GlobalStyles from "./Components/styles/Global";
const theme = {
  colors: {
    header: "#adaee6",
    body: "#d4dcf2",
    footer: "#003333",
  },
};
ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <ErrorBoundary>
       
          <ThemeProvider theme={theme}>
          <GlobalStyles/>
            <Enter />
    
          </ThemeProvider>
        
      </ErrorBoundary>
    </Provider>
    
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
