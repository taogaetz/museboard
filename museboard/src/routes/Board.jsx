import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Board (props) {
  const location = useLocation()
  const text = location.pathname.toString()
  return <>
    <Link to={'/b'}>Back to Boards</Link>
    <p>Congrats, You made it to</p>
    <h1>{text}</h1>
  </>
}