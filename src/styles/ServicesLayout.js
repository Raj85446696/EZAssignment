import styled from "styled-components";
import { NavLink } from "react-router-dom";

const desktopBreakpoint = "1024px";

export const ServicesWrapper = styled.section`
  position: relative;

  width: 100%;
  min-height: calc(100vh - var(--nav-height));

  /* Center the heading and card grid */
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem 2rem;

  /* Hide decorative image overflow */
  overflow: hidden;
`;

export const CardGrid = styled.div`
  width: 100%;
  max-width: 1200px; /* Constrain the grid width */
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;

  justify-items: center;

  /* Desktop: 3 columns */
  @media (min-width: ${desktopBreakpoint}) {
    margin-top: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
`;

export const CardLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  transition: var(--transition);

  &:hover {
    transform: scale(1.03) translateY(-5px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  display: block;
`;

export const BottomImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;

  /* Sits behind all content */
  z-index: -1;
  pointer-events: none; /* Not clickable */
`;
