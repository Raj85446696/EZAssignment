import styled from "styled-components";

//  breakpoints
const tabletBreakpoint = "768px";
const desktopBreakpoint = "1024px";

export const HeroSection = styled.section`
  /* min-height: calc(
    100vh - var(--nav-height)
  );  */
  min-height: 80vh;
  display: flex; /* flex for smaller screens */
  flex-direction: column; /* Stack vertically on mobile */
  align-items: center;
  justify-content: center; /* Center content vertically */
  padding: 2rem;

  /* Media query for larger screens */
  @media (min-width: ${desktopBreakpoint}) {
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two columns */
    gap: 2rem;
    padding: 2rem 1rem;
    align-items: center;
  }
`;

export const HeroLeft = styled.div`
  width: 100%; /* Full width on mobile */
  margin-bottom: 4rem; /* Space between image and text on mobile */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* For overlay text if needed */

  @media (min-width: ${desktopBreakpoint}) {
    margin-bottom: 0; /* Remove margin on desktop */
  }
`;

export const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%; /* Image takes full width of its container */
  max-width: 450px; /* Limit image size */

  img {
    width: 100%;
    display: block;
    filter: drop-shadow(
      0px 10px 15px rgba(0, 0, 0, 0.1)
    ); /* Soft shadow for depth */
  }
`;

export const HeroRight = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: ${desktopBreakpoint}) {
    text-align: center;
  }
`;

export const HeroTitle = styled.h1`
  font-family: var(--headingFont, "Island Moments");
  font-size: 2.8rem;
  color: #3f476a;
  line-height: 1.2;
  margin-bottom: 2rem;
  letter-spacing: var(--letterSpacing);

  @media (min-width: ${tabletBreakpoint}) {
    font-size: 3.5rem;
  }
  @media (min-width: ${desktopBreakpoint}) {
    font-size: 4rem; /* Larger font for desktop */
  }
`;

export const HeroSubtitle = styled.h2`
  font-family: var(--secondaryFont, "Montserrat");
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--primary-500);
  letter-spacing: 3px;
  margin-bottom: 2rem;
  text-transform: capitalize;

  @media (min-width: ${tabletBreakpoint}) {
    font-size: 1.6rem;
  }
  @media (min-width: ${desktopBreakpoint}) {
    font-size: 1.8rem;
  }
`;

export const HeroDescription = styled.p`
  font-family: var(--bodyFont, "Roboto");
  font-size: 0.95rem;
  color: var(--black);
  line-height: 1.8;
  max-width: 550px;
  margin: 0 auto 1.5rem auto;

  @media (min-width: ${desktopBreakpoint}) {
    /* margin: 0 0 1.5rem 0; Align left on desktop */
  }
`;
