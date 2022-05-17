import styled from "styled-components";
import { Link } from "react-router-dom";


const Logout = styled(Link)`
  color: white;
  text-decoration: none;
  background-color: black;
  position: absolute;
  right: 8px;
  top: 8px;
`

const Header = (props) => {
  return (<>
    <Logout to={'/'}>Logout</Logout>
    <MyHeaderWrapper>{`${props.name}`}</MyHeaderWrapper>
  </>)
}

const MyHeaderWrapper = styled.div`
  color: white;
  background-color: black ;
  margin: auto;
  padding-left: 25%;
  padding-top: 10%;
  height: 50px;
  font-size: 25px;
`

export default Header;