import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import TopBar from "../TopBar";
import SearchBar from "../SearchBar";
import ExplorePage from "../ExplorePage";

const StyledApp = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <TopBar />
        <PerfectScrollbar>
          <SearchBar />
          <ExplorePage />
        </PerfectScrollbar>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
