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
    transform: scale(0.8);
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
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutSection = styled.section`
  min-height: calc(100vh - var(--nav-height));
  padding: 0rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  /* Desktop layout: use grid for 1/3 + 2/3 */
  @media (min-width: ${desktopBreakpoint}) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: 4rem;
    padding: 2rem;
  }
`;

export const LeftColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: ${desktopBreakpoint}) {
    position: relative;
    height: 100%;
    min-height: 500px;
    animation: ${fadeInLeft} 1s ease-out both;
  }
`;

export const RightColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 21rem 0;
  position: relative;

  @media (min-width: ${desktopBreakpoint}) {
    padding: 0;
    animation: ${fadeInRight} 1s ease-out 0.3s both;
  }
`;

export const ParaClipImage = styled.img`
  width: 100%;
  max-width: 500px;
  top: 4rem;
  right: 2rem;
  position: absolute;
  animation: ${float} 3s ease-in-out infinite;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));

  @media (min-width: ${desktopBreakpoint}) {
    z-index: 1005;
    width: 120%;
    position: absolute;
    top: -4rem;
    left: 0;
    margin-bottom: 0;
    animation: ${float} 4s ease-in-out infinite;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.02);
      filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.2));
    }
  }
`;

export const IndiaGateImage = styled.img`
  width: 100%;
  max-width: 300px;
  position: absolute;
  bottom: -5rem;
  animation: ${slideInFromBottom} 1s ease-out 0.5s both;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.1));

  @media (min-width: 540px) {
    bottom: -15rem;
  }
  
  @media (min-width: ${desktopBreakpoint}) {
    position: absolute;
    bottom: -4rem;
    left: 0;
    z-index: 1;
    margin-bottom: 0;
    animation: ${fadeInUp} 1s ease-out 0.7s both;

    &:hover {
      transform: translateY(-5px);
      transition: transform 0.3s ease;
    }
  }
`;

export const TeamImageWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
  position: relative;
  animation: ${scaleIn} 1s ease-out 0.9s both;

  img {
    width: 100%;
    display: block;
    border-radius: 15px;
    transition: all 0.3s ease;
    filter: brightness(1.05) contrast(1.1);
  }

  &:hover img {
    transform: scale(1.02);
    filter: brightness(1.1) contrast(1.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.1), transparent);
    border-radius: 15px;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (min-width: ${desktopBreakpoint}) {
    margin-bottom: 2rem;
    height: 400px;
    
    img {
      position: absolute;
      width: 100%;
      left: 50%;
      right: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      display: block;
    }
  }
`;

export const PageTitle = styled.h1`
  font-family: var(--secondaryFont, "Island Moments");
  color: var(--black);
  font-size: 1rem;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 1.5rem;
  animation: ${fadeInUp} 1s ease-out 1.1s both;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
    animation: ${fadeInUp} 1s ease-out 1.3s both;
  }

  @media (min-width: ${desktopBreakpoint}) {
    font-size: 1.5rem;
    
    &::after {
      width: 80px;
    }
  }
`;

export const PortfolioButton = styled.a`
  background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  animation: ${fadeInUp} 1s ease-out 1.3s both;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, var(--primary-600), var(--primary-800));
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  &:hover::before {
    left: 100%;
  }

  &:active {
    transform: translateY(0) scale(1);
  }
`;

// Additional decorative elements
export const FloatingOrb = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--primary-500) 0%, transparent 70%);
  opacity: 0.1;
  animation: ${float} 6s ease-in-out infinite;
  z-index: 0;

  &:nth-child(1) {
    top: 10%;
    left: 5%;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    top: 60%;
    right: 10%;
    animation-delay: 2s;
    width: 150px;
    height: 150px;
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
  opacity: 0.5;
`;