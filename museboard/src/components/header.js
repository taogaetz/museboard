import styled from "styled-components";


const Header = (props) => {
  return (<>
    <myHeaderWrapper>{`${props.name}`}</myHeaderWrapper>
  </>)
}

const myHeaderWrapper = styled.div`
  color: purple;
  height: 200px;
  margin: auto;
  padding: 20px;
`

export default Header;