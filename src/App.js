import React from 'react'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes';
import { normalize } from 'polished';
import Shell from './components/Shell'


injectGlobal`
  html {
    font-size: 62.5%;
 }
  body {
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    font-size: 1.5em;
    color: #222;
    line-height: 1.5;
    letter-spacing: .1rem;
  }
  p, span {
    letter-spacing: .02rem;
  }
  a {
    text-decoration: none;
  }
  img {
    100%;
  }



  
  ${normalize()}
`;

const App = () =>
  <Router>
    <div className="content">
      <Shell>
        <Routes />
      </Shell>
    </div>
  </Router>

export default hot(module)(App);