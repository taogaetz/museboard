
import React from "react";
import LoginButton from "../components/LoginButton";
import styled from "styled-components";

import WebFont from 'webfontloader';

const Font = styled.div`

`

export default function Splash () {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ['Kiwi Maru']
      }
    });
  }, []);

  return <> 
    <h1>Museboard</h1>
      <LoginButton/>
    </>
}

export {Font}