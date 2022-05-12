import React from "react"
import styled from "styled-components";
import Header from "./components/Header.js";

import { Link } from "react-router-dom";
import './App.css';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  font-family: 'Kiwi Maru' ;
  text-decoration: inherit;
  /* color: inherit; */
`


function App() {
  return <>
  {/* <GlobalStyle> */}
    <Header name="MuseBoard"/>
    <Link to={'/b'}>Click here for Boards</Link>
  {/* </GlobalStyle> */}
  </>
}

export default App;