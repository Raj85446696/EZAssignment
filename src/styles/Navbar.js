import styled, { keyframes, css } from "styled-components";
import { NavLink } from "react-router-dom";

// --- BREAKPOINTS ---
const breakpointLarge = "1024px";
const navHeight = "70px";

// --- ANIMATIONS ---
const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// --- 1. Main Header ---
export const NavHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${navHeight};
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: transparent;
  transition: all 0.3s ease;
  z-index: 1001;
`;

export const LogoWrapper = styled(NavLink)`
  display: block;
  z-index: 1002;
  transition: transform 0.3s ease;
  
  img {
    height: 40px;
    width: auto;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const BaseToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: scale(1.1);
  }

  img {
    width: 28px;
    height: 28px;
    transition: transform 0.3s ease;
  }
`;

export const ToggleOpenButton = styled(BaseToggleButton)`
  animation: ${props => !props.$isOpen ? fadeIn : 'none'} 0.3s ease;
`;

export const ToggleCloseButton = styled(BaseToggleButton)`
  animation: ${props => props.$isOpen ? fadeIn : 'none'} 0.3s ease;
`;

// --- 2. Desktop Menu ---
export const DesktopMenu = styled.div`
  display: none;

  @media (min-width: ${breakpointLarge}) {
    display: flex;
    align-items: center;
    gap: 2rem;

    position: fixed;
    top: 0.5rem;
    right: 5rem;
    height: ${navHeight};

    z-index: 1001;

    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: ${({ $isOpen }) => $isOpen ? "translateX(0)" : "translateX(120%)"};
    opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  }
`;

export const NavLinksGroup = styled.div`
  display: flex;
  gap: 2rem;
`;

export const DesktopNavLink = styled(NavLink)`
  font-family: var(--secondaryFont, "Montserrat");
  color: var(--black);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
  animation: ${props => props.$isOpen ? css`${slideUp} 0.5s ease ${props.$delay || 0}s both` : 'none'};

  &:hover {
    color: var(--primary-500);
    transform: translateY(-2px);
  }

  &.active {
    color: var(--primary-500);
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--primary-500);
      animation: ${fadeIn} 0.3s ease;
    }
  }
`;

// --- 3. Mobile/Tablet Panel ---
export const NavPanel = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  max-width: 400px;

  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(0, 0, 0, 0.1);

  z-index: 1000;
  padding: 6rem 2rem 2rem 3rem;

  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${({ $isOpen }) => $isOpen ? "translateX(0)" : "translateX(100%)"};

  @media (min-width: ${breakpointLarge}) {
    display: none;
  }
`;

export const MobileNavLink = styled(NavLink)`
  font-family: var(--secondaryFont, "Montserrat");
  color: var(--black);
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1rem 0;
  transition: all 0.3s ease;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  animation: ${props => props.$isOpen ? css`${slideUp} 0.5s ease ${props.$delay || 0}s both` : 'none'};

  &:hover {
    color: var(--primary-500);
    transform: translateX(10px);
  }

  &.active {
    color: var(--primary-500);
    font-weight: 600;
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

// --- 4. Button ---
export const LetsTalkButton = styled(NavLink)`
  background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
  color: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1rem;
  font-family: var(--Primary);
  font-weight: 700;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  animation: ${props => props.$isOpen ? css`${slideUp} 0.5s ease ${props.$delay || 0}s both` : 'none'};

  span {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: linear-gradient(135deg, var(--primary-600), var(--primary-800));
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    
    span {
      transform: scale(1.2) rotate(10deg);
    }
  }

  &:active {
    transform: translateY(0);
  }

  ${({ $isDesktop }) =>
    !$isDesktop &&
    `
    margin-top: 2rem;
    font-size: 1.1rem;
    padding: 1rem 2rem;
    align-self: center;
  `}
`;

// --- 5. Overlay ---
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
  transition: all 0.3s ease;
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};

  @media (min-width: ${breakpointLarge}) {
    display: none;
  }
`;