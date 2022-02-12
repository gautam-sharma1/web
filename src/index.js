import React from 'react';
import ReactDOM from 'react-dom';
import CardGroup from './CardGroup'
import Footer from './Footer';
import WordCloud from './WordCloud';
import {BrowserRouter} from 'react-router-dom';
import {Route,Link} from 'react-router-dom';
import App from './App';

const wordcloud = document.getElementById("wordcloud");
const rootElement = document.getElementById("project-cards");
const myFooter = document.getElementById("footer");
const myFooter2 = document.getElementById("my-footer");
ReactDOM.render(
<App/>,
document.getElementById("root")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

