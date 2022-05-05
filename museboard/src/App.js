import logo from './logo.svg';
import Header from './components/header';
import React from "react";
import './App.css';
import {LoginButton} from './components/LoginButton.js';

function App() {
  return ( <>
      <h1>Welcome to the Party...</h1>
      <LoginButton/>
      </>);
}

export default App;
