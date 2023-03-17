import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Add from './add_react';
// import Stud_tbl from './Student';
// import Employee from './Employeecomponent';
// import Emp from './Emp_e';
// import Sqr from './square';
//import MainCom from './RoutingDemo/MainComponent';
import { MainComWebDes } from './RoutingWebPageDesignStudent/MainComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainComWebDes/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
