import React from "react";

import ExploreNowBtn from "../../components/ExploreNowBtn";
import BackServiceBtn from "../../components/BackServiceBtn";
import ServiceHeading from "../../components/ServiceHeading";

//  assets
import filmProdCardImg from "../../assets/services/film/filmProd.png";
import camera1 from "../../assets/services/film/camera01.svg";
import camera2 from "../../assets/services/film/camera02.svg";
import camera3 from "../../assets/services/film/camera03.svg";
import camera4 from "../../assets/services/film/camera04.svg";

// ---  Styles ---
import {
  PageWrapper,
  ContentGrid,
  ImageCard,
  TextColumn,
  StyledList,
  StyledBackBtn,
  Camera1,
  Camera2,
  Camera3,
  Camera4,
} from "../../styles/FilmProductionPage";

function FilmProductionPage() {
  return (
    <PageWrapper>
      <ServiceHeading
        title={"Filmmaking is a chance to live many lifetimes. - Robert Altman"}
      />

      <ContentGrid>
        {/* left image section */}
        <ImageCard>
          <img src={filmProdCardImg} alt="Film Production Green Screen" />
        </ImageCard>

        {/* right section */}
        <TextColumn>
          <p>
            Who says films are just an escape? We see them as a way to live many
            lives - to feel, to explore, and to tell stories that stay. And with
            each film, we carry new memories and new reasons to keep creating.
            <br />V crafts:
          </p>
          <StyledList>
            <li>Documentaries</li>
            <li>Corporate Videos</li>
            <li>2D Animation Videos</li>
            <li>3D Animation Videos</li>
          </StyledList>
          <ExploreNowBtn />
        </TextColumn>
      </ContentGrid>

      {/* top left absolute*/}
      <StyledBackBtn>
        <BackServiceBtn />
      </StyledBackBtn>

      {/* decorative pngs absolute*/}
      <Camera1 src={camera1} alt="" />
      <Camera2 src={camera2} alt="" />
      <Camera3 src={camera3} alt="" />
      <Camera4 src={camera4} alt="" />
    </PageWrapper>
  );
}

export default FilmProductionPage;
