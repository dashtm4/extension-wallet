import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";

import "react-perfect-scrollbar/dist/css/styles.css";

const StyledApp = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        TopBar
        <PerfectScrollbar>Content</PerfectScrollbar>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
