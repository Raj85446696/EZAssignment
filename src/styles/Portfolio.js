import styled from "styled-components";

const desktopBreakpoint = "1024px";

export const PortfolioSection = styled.section`
  position: relative;

  min-height: calc(100vh - var(--nav-height));

  width: 100%;

  /* Center the main content block */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 4rem 2rem;

  overflow: hidden;

  @media (min-width: ${desktopBreakpoint}) {
    padding: 0;
  }
`;

export const MainContentWrapper = styled.div`
  /* Sits on top of the decorative images */
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TextWrapper = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-family: var(--secondaryFont, "Montserrat");
  font-size: 1rem;
  font-weight: 500;
  color: var(--black);
  margin-bottom: 0.5rem;

  @media (min-width: ${desktopBreakpoint}) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  font-family: var(--bodyFont, "Roboto");
  font-size: 1rem;
  letter-spacing: 0.2rem;
  color: var(--grey-800);
`;

export const PortfolioImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  display: block;
`;

// --- Absolute  Images ---

export const CamImage = styled.img`
  display: block;
  position: absolute;
  width: 50px;
  left: 2rem;
  top: 1rem;

  @media (min-width: ${desktopBreakpoint}) {
    top: 5rem;
    left: 4rem;
    width: 120px;
    height: auto;

    z-index: 1;
  }
`;

export const FooterVectorImage = styled.img`
  position: absolute;
  bottom: 0rem;
  right: 0rem;
  width: 100px;
  @media (min-width: ${desktopBreakpoint}) {
    display: block;

    width: 200px;
    height: auto;

    z-index: 1;
  }
`;
