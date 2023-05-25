import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { createStore, combineReducers } from 'redux';
import authReducer from './redux/reducers/authReducers';
import { Provider } from 'react-redux';

<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>;

const rootReducer = combineReducers({
  auth: authReducer,
});
// 스토어를 생성
const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* 스토어를 전체 애플리케이션에 제공 */}
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();