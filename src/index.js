import React from 'react';
import ReactDOM from 'react-dom';
import CardGroup from './CardGroup'
import Footer from './Footer';
const rootElement = document.getElementsByClassName("react");
ReactDOM.render(
  <CardGroup/>
  ,rootElement[0]
);

ReactDOM.render(
  <Footer/>
  ,rootElement[1]
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

