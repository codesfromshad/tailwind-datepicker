import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '@components/App';
import Month from '@components/Month';
import DateRangePicker from '@components/DateRangePicker';
// import Year from '@components/Year';
// import Decade from '@components/Decade';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <DateRangePicker />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
