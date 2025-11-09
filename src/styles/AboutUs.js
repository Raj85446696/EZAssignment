import styled, { keyframes, css } from "styled-components";

const desktopBreakpoint = "1024px";

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px) scale(1.1);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const textGlow = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px rgba(63, 71, 106, 0.1);
  }
  50% {
    text-shadow: 0 0 20px rgba(63, 71, 106, 0.2);
  }
`;

export const AboutSection = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding: 0rem 1rem;
  width: 100%;
  margin-top: 4rem;
  overflow-x: hidden;

  /* Mobile-first: stack columns */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  /* Desktop: 2-column grid */
  @media (min-width: ${desktopBreakpoint}) {
    margin-top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 1rem;
  }
`;

// Helper for columns to sit on top of the mountain
const BaseColumn = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${desktopBreakpoint}) {
    align-items: flex-start;
  }
`;

export const LeftColumn = styled(BaseColumn)`
  text-align: center;
  padding-top: 2rem;
  animation: ${fadeInLeft} 1s ease-out 0.3s both;

  @media (min-width: ${desktopBreakpoint}) {
    padding-top: 0;
    justify-content: center;
    align-items: center;
    align-self: center;
  }
`;

export const RightColumn = styled(BaseColumn)`
  text-align: center;
  padding-top: 0;
  animation: ${fadeInRight} 1s ease-out 0.5s both;

  @media (min-width: ${desktopBreakpoint}) {
    padding-top: 1rem;
    text-align: center;
  }
`;

export const SmallTitle = styled.h2`
  font-family: var(--secondaryFont, "Montserrat");
  font-size: 1rem;
  font-weight: 500;
  color: var(--black);
  margin-bottom: 1.5rem;
  animation: ${fadeInUp} 1s ease-out 0.7s both;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
    animation: ${fadeInUp} 1s ease-out 0.9s both;
  }

  @media (min-width: ${desktopBreakpoint}) {
    font-size: 1.5rem;
    
    &::after {
      width: 60px;
    }
  }
`;

export const Description = styled.p`
  font-family: var(--bodyFont, "Roboto");
  line-height: 1.75;
  font-size: 0.8rem;
  color: var(--grey-800);
  max-width: 30em;
  margin-bottom: 2rem;
  animation: ${fadeInUp} 1s ease-out 0.9s both;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    color: var(--grey-900);
  }

  @media (min-width: ${desktopBreakpoint}) {
    font-size: 1rem;
  }
`;

export const StatsImage = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;
  display: block;
  animation: ${scaleIn} 1s ease-out 1.1s both;
  transition: all 0.3s ease;
  border-radius: 10px;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));

  &:hover {
    transform: scale(1.02);
    filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.15));
  }

  @media (min-width: ${desktopBreakpoint}) {
    border-radius: 15px;
  }
`;

export const LargeTitle = styled.h1`
  font-family: var(--headingFont, "Island Moments");
  font-size: 2rem;
  color: #3f476a;
  line-height: 1.3;
  font-weight: 500;
  text-align: center;
  animation: ${fadeInUp} 1s ease-out 0.5s both;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    animation: ${textGlow} 2s ease-in-out infinite;
    transform: translateY(-2px);
  }

  @media (min-width: ${desktopBreakpoint}) {
    font-size: 2.5rem;
  }
`;

export const MountainImage = styled.img`
  position: relative;
  width: 100%;
  height: auto;
  z-index: 1;
  pointer-events: none;
  object-fit: cover;
  object-position: bottom;
  animation: ${slideInFromBottom} 1.5s ease-out 0.8s both;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }

  @media (min-width: ${desktopBreakpoint}) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    left: auto;
    width: 50%;
    animation: ${slideInFromBottom} 2s ease-out 0.8s both;
  }
`;

// Additional decorative elements
export const FloatingElement = styled.div`
  position: absolute;
  z-index: 0;
  opacity: 0.1;
  animation: ${float} 6s ease-in-out infinite;

  &:nth-child(1) {
    top: 10%;
    left: 5%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: radial-gradient(circle, var(--primary-500) 0%, transparent 70%);
    animation-delay: 0s;
  }

  &:nth-child(2) {
    top: 60%;
    right: 10%;
    width: 120px;
    height: 120px;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    background: linear-gradient(135deg, var(--primary-300), var(--primary-600));
    animation-delay: 2s;
  }

  @media (max-width: ${desktopBreakpoint}) {
    display: none;
  }
`;

export const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.1) 100%);
  z-index: -1;
  opacity: 0;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
`;

// Stats container for additional content
export const StatsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  animation: ${fadeInUp} 1s ease-out 1.3s both;

  @media (max-width: ${desktopBreakpoint}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  animation: ${scaleIn} 0.6s ease-out ${props => props.$delay || 0}s both;

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }
`;

export const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-500);
  margin-bottom: 0.5rem;
  font-family: var(--headingFont);
`;

export const StatLabel = styled.div`
  font-size: 0.9rem;
  color: var(--grey-700);
  font-family: var(--secondaryFont);
`;