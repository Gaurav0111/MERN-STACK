import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
const cssStyle = {};

let curDare = new Date();
curDare = curDare.getHours();
let greeting = '';
if (curDare >= 1 && curDare < 12) {
  greeting = 'Good Morning';
  cssStyle.color = 'green';
}
else if (curDare > 12 && curDare < 19) {
  greeting = 'Good Afternoon';
  cssStyle.color = 'orange';
} else {
  greeting = 'Good Night';
  cssStyle.color = 'black';
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1>Hey, <span style={cssStyle} > {greeting}</span> </h1>
);

reportWebVitals();

