import React from "react";
import statsImg from "../assets/aboutUs/statistics.png";
import mountainImg from "../assets/aboutUs/Mountain.png";

// Import styles
import {
  AboutSection,
  LeftColumn,
  RightColumn,
  SmallTitle,
  Description,
  StatsImage,
  LargeTitle,
  MountainImage,
} from "../styles/AboutUs";

function AboutUsPage() {
  return (
    <AboutSection>
      {/* left side */}
      <LeftColumn>
        <SmallTitle>A montage of familiar faces and names.</SmallTitle>
        <Description>
          Some stories come from the biggest names. Others begin with bold,
          rising voices. We’ve been fortunate to walk alongside both -
          listening, creating, and building stories that matter.
        </Description>
        <StatsImage src={statsImg} alt="Company Statistics" />
      </LeftColumn>

      {/* right side */}
      <RightColumn>
        <LargeTitle>
          Every project is more than just a brief - it’s a new chapter waiting
          to be written. Together, we've crafted tales that inspire, connect,
          and endure.
        </LargeTitle>
      </RightColumn>

      {/* absolute to parent div with bottom 0 */}
      <MountainImage src={mountainImg} alt="Mountain landscape" />
    </AboutSection>
  );
}

export default AboutUsPage;
