
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import React from "react"



const LoginWrapper = styled.div`
  padding:20px;
  margin: auto;
  width: 50%;
`

export default function LoginPage(){

  const [value, setValue] = React.useState('')
  const navigate = useNavigate()
  const handleLogin = async e => {
    e.preventDefault();
    console.log(value);
    await fetch('/api/login', {
      method: 'POST',
      body: value}
      )
    navigate('/home')
  };

  return(<>
  <Link to={"/"}>Go Back to Splash Screen</Link>
  <LoginWrapper>
    <h1>Enter a phrase...</h1>
    <form id="login" onSubmit={handleLogin}>
      <textarea style={{height:"50px"}} onChange={event => setValue(event.target.value)} />
    </form>
    <button type="submit" form="login">Submit</button>
  </LoginWrapper>
  </>)
}
