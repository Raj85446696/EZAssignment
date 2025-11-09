import React from "react";
import camImg from "../assets/portfolio/Cam.png";
import FooterImg from "../assets/portfolio/FooterVector.png";
import portfolio from "../assets/portfolio/portfolio.png";

// Import styles
import {
  PortfolioSection,
  MainContentWrapper,
  TextWrapper,
  Title,
  Subtitle,
  PortfolioImage,
  CamImage,
  FooterVectorImage,
} from "../styles/Portfolio";

function PortfolioPage() {
  return (
    <PortfolioSection>
      <MainContentWrapper>
        <TextWrapper>
          <Title>The Highlight Reel</Title>
          <Subtitle>Watch the magic we’ve captured.</Subtitle>
        </TextWrapper>
        {/* main image at center */}
        <PortfolioImage src={portfolio} alt="Portfolio highlight reel" />
      </MainContentWrapper>

      {/* absolute vector images */}
      <CamImage src={camImg} alt="Vintage camera illustration" />
      <FooterVectorImage src={FooterImg} alt="Decorative vector" />
    </PortfolioSection>
  );
}

export default PortfolioPage;
