import styled from "styled-components";

import ExperiencePanel from "../../components/ExperiencePanel";
import DefiSwap from "../../assets/images/defi-swap.png";

const StyledSectionTitle = styled.div``;

function Explore() {
  return (
    <div>
      <StyledSectionTitle>Recent Experiences</StyledSectionTitle>
      <ExperiencePanel
        logo={DefiSwap}
        title="DeFi Swap"
        description="Swap your digital assets"
        users={200}
      />
    </div>
  );
}

export default Explore;
