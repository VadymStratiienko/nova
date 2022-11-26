import React from "react";
import styled from "styled-components";
import Banner from "./Components/Banner/view";
import Header from "./Components/Header/view";
import Landing from "./Components/Landing/view";
import { GlobalStyle } from "./styles/global";

const Wrapper = styled.main`
  position: relative;
  height: 200vh;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Banner />
        <Landing />
      </Wrapper>
    </>
  );
}

export default App;
