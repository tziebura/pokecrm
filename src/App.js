import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from './components';
import { Routing } from './Routing';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }
  
  html,
  body {
    font-family: 'Baloo Bhaina 2', cursive;
  }

  body {
    font-size: 14px;
    margin: 0;
    padding: 0;
    background-color: #fff;
  }
`

function App() {
  return (
    <Router>
      <Global />
      <Layout>
        <Routing />
      </Layout>
    </Router>
  );
}

export default App;
