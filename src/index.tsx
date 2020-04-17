
import './index.css';
// 兼容IE
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import * as serviceWorker from './serviceWorker';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReduxRoot } from "./ReduxRoot";

const rootEl = document.getElementById("root");
ReactDOM.render(<ReduxRoot />, rootEl);

/**
 * 严格模式 使用 antd 报错
 * <React.StrictMode>
    <App />
  </React.StrictMode>,
 * 
 */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
