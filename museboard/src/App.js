import React from "react"
import styled from "styled-components";
import Header from "./components/Header";

import { Link } from "react-router-dom";
import './App.css';





function App() {
  return <>
  <Header name="MuseBoard"/>
  <Link to={'/b'}>Click here for Boards</Link>
  </>
}

export default App;
