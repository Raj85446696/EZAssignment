import React from "react";
import HeroImage from "../assets/Hero1.png";

import {
  HeroSection,
  HeroLeft,
  HeroImageWrapper,
  HeroRight,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
} from "../styles/HomePage";

function HomePage() {
  return (
    <HeroSection>
      <HeroLeft>
        <HeroImageWrapper>
          <img src={HeroImage} alt="Varnan Films" />
        </HeroImageWrapper>
      </HeroLeft>

      <HeroRight>
        <HeroTitle>Varnan is where stories find their voice and form</HeroTitle>
        <HeroSubtitle>Films . Brands . Art</HeroSubtitle>
        <HeroDescription>
          Since 2009, V’ve been telling stories - stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way - by listening with intention. V believes it takes trust,
          patience, and an eye for the unseen to capture what truly matters. V
          doesn’t just tell stories - V honors them.
        </HeroDescription>
      </HeroRight>
    </HeroSection>
  );
}

export default HomePage;
