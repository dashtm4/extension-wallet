import styled from "styled-components";

import ExperiencePanel from "../../components/ExperiencePanel";
import DefiSwap from "../../assets/images/defi-swap.png";
import DocuSign from "../../assets/images/docu-sign.png";

const StyledSectionTitle = styled.div.attrs({
  className: "",
})``;

const StyledSection = styled.div.attrs({
  className: "px-",
})`
  padding: 0 18px;
`;

function Explore() {
  return (
    <div>
      <StyledSection className="px-">
        <StyledSectionTitle className="">Recent Experiences</StyledSectionTitle>
        <ExperiencePanel
          logo={DefiSwap}
          title="DeFi Swap"
          description="Swap your digital assets"
          users={200}
        />
        <ExperiencePanel
          logo={DocuSign}
          title="Docu Sign"
          description="sign smart contracts seamlessly"
          users={1000}
        />
      </StyledSection>
    </div>
  );
}

export default Explore;
