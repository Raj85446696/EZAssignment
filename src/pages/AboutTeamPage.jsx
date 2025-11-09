import React from "react";
import aboutTeamImg from "../assets/aboutTeam/aboutTeam.png";
import paraClip from "../assets/aboutTeam/paraClip.png";
import indiaGateSVG from "../assets/aboutTeam/indiaGateSVG.svg";

// Import styles
import {
  AboutSection,
  LeftColumn,
  RightColumn,
  ParaClipImage,
  IndiaGateImage,
  TeamImageWrapper,
  PageTitle,
  PortfolioButton,
} from "../styles/AboutTeam";

function AboutTeamPage() {
  return (
    <AboutSection>
      {/* Left side will paraClip and india gate image absolute */}
      <LeftColumn>
        <ParaClipImage src={paraClip} alt="Our belief" />
        <IndiaGateImage src={indiaGateSVG} alt="From India" />
      </LeftColumn>

      {/* Right side aboutTeamImg and title, button below */}
      <RightColumn>
        <TeamImageWrapper>
          <img src={aboutTeamImg} alt="Varnan Team" />
        </TeamImageWrapper>
        <PageTitle>
          Take a closer look at the stories V bring to life.
        </PageTitle>
        <PortfolioButton href="/portfolio">View Portfolio</PortfolioButton>
      </RightColumn>
    </AboutSection>
  );
}

export default AboutTeamPage;
