import styled from "styled-components";

const desktopBreakpoint = "1024px";

export const ContactSection = styled.section`
  position: relative;
  /* min-height: calc(100vh - var(--nav-height)); */
  min-height: 100vh;

  width: 100%;
  padding: 2rem 2rem;

  /* Center the content grid */
  display: flex;
  align-items: center;
  justify-content: center;

  overflow-x: hidden;

  @media (min-width: ${desktopBreakpoint}) {
    padding: 0rem 0rem;
  }
`;

export const GridWrapper = styled.div`
  /* Sits on top of the decorative images */
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 1200px; /* Constrain the max width */

  /* Mobile-first: stack columns */
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  /* Desktop: 1:1 two-column layout */
  @media (min-width: ${desktopBreakpoint}) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center; /* Vertically align columns */
  }
`;

export const TextColumn = styled.div`
  /* Vertically center the text */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const FormColumn = styled.div`
  width: 100%;
`;

export const PageTitle = styled.h1`
  font-family: var(--secondaryFont);

  color: #3f476a;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4;
  max-width: 30rem;

  align-self: center;
  text-align: center;

  @media (min-width: ${desktopBreakpoint}) {
    text-align: left;
    /* padding-left: 2rem; */
    font-size: 1rem;
  }
`;

// --- Absolute Decorative Images ---

const AbsoluteImage = styled.img`
  position: absolute;
  z-index: 1; /* Sits behind the content */
  pointer-events: none; /* Not clickable */

  @media (min-width: ${desktopBreakpoint}) {
    display: block;
  }
`;

export const TopRightImage = styled(AbsoluteImage)`
  top: 0rem;
  right: 0rem;
  width: 100px;

  @media (min-width: ${desktopBreakpoint}) {
    width: 300px;
    top: 0;
    right: 0;
  }
`;

export const BottomLeftImage = styled(AbsoluteImage)`
  width: 100px;
  bottom: 0;
  left: 0;
  @media (min-width: ${desktopBreakpoint}) {
    width: 300px;
    bottom: 0;
    left: 0;
  }
`;
