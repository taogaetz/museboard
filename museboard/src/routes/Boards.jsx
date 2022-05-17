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
      <BoardLink boardID="general" BoardName="General" />
      <BoardLink boardID="music" BoardName="Music" />
      <BoardLink boardID="paint" BoardName="Paint" />
      <BoardLink boardID="space" BoardName="Spaces" />
      </BoardsWrapper>
      <TestButton/>
  </>
}
