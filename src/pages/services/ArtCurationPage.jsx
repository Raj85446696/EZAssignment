import React from "react";
import ServiceHeading from "../../components/ServiceHeading";
import ExploreNowBtn from "../../components/ExploreNowBtn";
import BackServiceBtn from "../../components/BackServiceBtn";

//  assets
import artImg from "../../assets/services/art/art.png";
import art1 from "../../assets/services/art/artcuration01.svg";
import art2 from "../../assets/services/art/artcuration02.svg";
import art3 from "../../assets/services/art/artcuration03.svg";
import art4 from "../../assets/services/art/artcuration04.svg";

// ---  Styles ---
import {
  PageWrapper,
  ContentGrid,
  ImageCard,
  TextColumn,
  StyledList,
  StyledBackBtn,
  Art1,
  Art2,
  Art3,
  Art4,
} from "../../styles/ArtPage";

function FilmProductionPage() {
  return (
    <PageWrapper>
      <ServiceHeading
        title={"V take art where it belongs, to the people.” - Vernita Verma"}
      />

      <ContentGrid>
        {/* left image section */}
        <ImageCard>
          <img src={artImg} alt="Film Production Green Screen" />
        </ImageCard>

        {/* right section */}
        <TextColumn>
          <p>
            Art isn’t meant to sit on distant walls - it’s meant to breathe, to
            travel, to belong. Through every festival, every performance, and
            every gathering, we help stories find their stage and their people.
            <br />V curates:
          </p>

          <StyledList>
            <li>Art Festivals</li>
            <li>Live Performances</li>
            <li>Community Events</li>
            <li>Cultural Storytelling</li>
          </StyledList>
          <ExploreNowBtn />
        </TextColumn>
      </ContentGrid>

      {/* top left absolute*/}
      <StyledBackBtn>
        <BackServiceBtn />
      </StyledBackBtn>

      {/* decorative pngs absolute*/}
      <Art1 src={art1} alt="" />
      <Art2 src={art2} alt="" />
      <Art3 src={art3} alt="" />
      <Art4 src={art4} alt="" />
    </PageWrapper>
  );
}

export default FilmProductionPage;
