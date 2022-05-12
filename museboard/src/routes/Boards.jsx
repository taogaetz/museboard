import React from "react";
import styled from "styled-components";

import BoardLink from "../components/BoardLink";
import Header from "../components/Header";
import TestButton from "../components/TestButton";

const BoardsWrapper = styled.div`
  padding-top: 15px;
`


export default function Boards () {
  return <>
    <Header name="Boards"></Header>
    <BoardsWrapper>
      <BoardLink boardID="g" BoardName="General" />
      <BoardLink boardID="m" BoardName="Music" />
      <BoardLink boardID="p" BoardName="Paint" />
      <BoardLink boardID="s" BoardName="Spaces" />
      </BoardsWrapper>
      <TestButton/>
  </>
}
