import styled from "styled-components";

const desktopBreakpoint = "1024px";

export const PageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 4rem 1rem;
  overflow-x: hidden;

  @media (min-width: ${desktopBreakpoint}) {
    padding: 1rem 1rem;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  /* Mobile-first: 1 column */
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  margin-top: 2rem;
  position: relative;

  /* Sits on top of decorative images */
  z-index: 2;

  @media (min-width: ${desktopBreakpoint}) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding-bottom: 2rem;

    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ImageCard = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 auto; /* Center on mobile */

  img {
    width: 100%;
    display: block;
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    font-family: var(--bodyFont, "Roboto");
    font-size: 1.1rem;
    line-height: 1.75;
    color: var(--grey-800);
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding-left: 1rem;
  margin: 1rem 0 2rem 0;

  li {
    font-family: var(--secondaryFont, "Montserrat");
    font-weight: 600;
    color: var(--grey-900);
    font-size: 1.1rem;
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.75rem;

    /* Custom bullet */
    &::before {
      content: "•";
      color: var(--primary-500);
      font-size: 1.5rem;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export const StyledBackBtn = styled.div`
  position: absolute;
  top: 0rem;
  left: 2rem;
  z-index: 3;

  @media (max-width: ${desktopBreakpoint}) {
    top: 0rem;
    left: 1rem;
  }
`;

const DecorativeImage = styled.img`
  /* display: none */
  position: absolute;
  z-index: 1; /* Behind content */

  @media (min-width: ${desktopBreakpoint}) {
    display: block;
  }
`;

export const Branding1 = styled(DecorativeImage)`
  top: 15%;
  left: 0;
  width: 40px;
  transform: translateY(-50%);
  @media (min-width: ${desktopBreakpoint}) {
    top: 15%;
    left: 0;
    width: 80px;
  }
`;

export const Branding2 = styled(DecorativeImage)`
  top: 0;
  right: 5%;
  width: 50px;
  @media (min-width: ${desktopBreakpoint}) {
    width: 100px;
  }
`;

export const Branding3 = styled(DecorativeImage)`
  top: 50%;
  right: 0;
  width: 40px;
  @media (min-width: ${desktopBreakpoint}) {
    top: 50%;
    right: 8%;
    width: 90px;
  }
`;

export const Branding4 = styled(DecorativeImage)`
  bottom: 10%;
  right: 0%;
  width: 40px;
  @media (min-width: ${desktopBreakpoint}) {
    bottom: 10%;
    right: 5%;
    width: 80px;
  }
`;
