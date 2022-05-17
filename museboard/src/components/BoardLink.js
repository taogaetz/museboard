import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BoardButtonWrapper = styled.div`
  margin: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  height:40px;
  `

const BoardButton = styled(Link)`
  text-decoration: none;
  background-color: black;
  height: 30px;
  color: white;
  text-align: center;
  padding-top: 5%;
`

export default function BoardLink (props) {


  return <>
    <BoardButtonWrapper>
      <BoardButton to={`${props.boardID}`}>{props.BoardName}</BoardButton>
    </BoardButtonWrapper>
  </>
}

