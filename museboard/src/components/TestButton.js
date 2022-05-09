import React from "react";
import styled from "styled-components";



const Button = styled.button`

`

const testHandler = async (ev) => {
  await fetch('api/dbTest', {method: "GET"})
  .then((result) => result.json())
  .then((response) => console.log(response.data.test))
}

export default function TestButton () {
  return <Button onClick={testHandler}>dbTest</Button>
}