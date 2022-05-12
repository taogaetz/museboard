import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App.js';
import LoginPage from './routes/LoginPage.jsx'
import Splash from './routes/Splash.jsx'
import Font from './routes/Splash.jsx'
import Boards from './routes/Boards.jsx';
import Board from './routes/Board.jsx';

import reportWebVitals from './reportWebVitals.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/home' element={<App />}/>
        <Route path='/b' element={<Boards />}/>
        <Route path='/b/:boardID' element={<Board />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
