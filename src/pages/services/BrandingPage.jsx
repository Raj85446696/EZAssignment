import React from "react";
import ServiceHeading from "../../components/ServiceHeading";
import ExploreNowBtn from "../../components/ExploreNowBtn";
import BackServiceBtn from "../../components/BackServiceBtn";

//  assets
import brandingImg from "../../assets/services/branding/branding.png";
import branding1 from "../../assets/services/branding/brandingVec01.svg";
import branding2 from "../../assets/services/branding/brandingVec02.svg";
import branding3 from "../../assets/services/branding/brandingVec03.svg";
import branding4 from "../../assets/services/branding/brandingVec04.svg";

// ---  Styles ---
import {
  PageWrapper,
  ContentGrid,
  ImageCard,
  TextColumn,
  StyledList,
  StyledBackBtn,
  Branding1,
  Branding2,
  Branding3,
  Branding4,
} from "../../styles/BrandingPage";

function FilmProductionPage() {
  return (
    <PageWrapper>
      <ServiceHeading
        title={"A brand is a voice, and a product is a souvenir. - Lisa Gansky"}
      />

      <ContentGrid>
        {/* left image section */}
        <ImageCard>
          <img src={brandingImg} alt="Film Production Green Screen" />
        </ImageCard>

        {/* right section */}
        <TextColumn>
          <p>
            A brand isn’t just what you see - it’s what you remember, what you
            carry home, and what you trust. We shape brands that people
            remember, return to, and fall in love with.
            <br />V creates:
          </p>

          <StyledList>
            <li>Branding & Communication</li>
            <li>Market Mapping</li>
            <li>Content Management</li>
            <li>Social Media Management</li>
            <li>Rebranding</li>
          </StyledList>
          <ExploreNowBtn />
        </TextColumn>
      </ContentGrid>

      {/* top left absolute*/}
      <StyledBackBtn>
        <BackServiceBtn />
      </StyledBackBtn>

      {/* decorative pngs absolute*/}
      <Branding1 src={branding1} alt="" />
      <Branding2 src={branding2} alt="" />
      <Branding3 src={branding3} alt="" />
      <Branding4 src={branding4} alt="" />
    </PageWrapper>
  );
}

export default FilmProductionPage;
