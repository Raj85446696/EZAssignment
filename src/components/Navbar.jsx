import React, { useState, useEffect } from "react";

// Import assets
import logo from "../assets/navbar/Logo.png";
import menuBar from "../assets/navbar/MenuBar.png";
import menuClose from "../assets/navbar/MenuClose.png";

// Import styled components
import {
  // Layout
  NavHeader,
  DesktopMenu,
  NavPanel,
  Overlay,

  // Elements
  LogoWrapper,
  NavLinksGroup,
  DesktopNavLink,
  MobileNavLink,
  LetsTalkButton,

  // Toggles
  ToggleOpenButton,
  ToggleCloseButton,
} from "../styles/Navbar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Function to toggle the state
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // Closes menu when a link is clicked
  const closeNav = () => {
    setIsOpen(false);
  };

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeNav();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      {/* ============================= */}
      {/* 1. MAIN HEADER (ALWAYS VISIBLE) */}
      {/* ============================= */}
      <NavHeader $scrolled={scrolled}>
        <LogoWrapper to="/" onClick={closeNav}>
          <img src={logo} alt="Company Logo" />
        </LogoWrapper>

        {/* The single toggle button that changes based on state */}
        {isOpen ? (
          <ToggleCloseButton onClick={toggleNav} $isOpen={isOpen}>
            <img src={menuClose} alt="Close Menu" />
          </ToggleCloseButton>
        ) : (
          <ToggleOpenButton onClick={toggleNav} $isOpen={isOpen}>
            <img src={menuBar} alt="Open Menu" />
          </ToggleOpenButton>
        )}
      </NavHeader>

      {/* ===================================== */}
      {/* 2. DESKTOP MENU (SLIDES IN, > 768px)  */}
      {/* ===================================== */}
      <DesktopMenu $isOpen={isOpen}>
        <NavLinksGroup>
          <DesktopNavLink 
            to="/services" 
            onClick={closeNav}
            $isOpen={isOpen}
            $delay={0}
          >
            Services
          </DesktopNavLink>
          <DesktopNavLink 
            to="/about-team" 
            onClick={closeNav}
            $isOpen={isOpen}
            $delay={0.1}
          >
            Their Stories
          </DesktopNavLink>
          <DesktopNavLink 
            to="/about-us" 
            onClick={closeNav}
            $isOpen={isOpen}
            $delay={0.2}
          >
            Our Story
          </DesktopNavLink>
          <DesktopNavLink 
            to="/portfolio" 
            onClick={closeNav}
            $isOpen={isOpen}
            $delay={0.3}
          >
            Varnan
          </DesktopNavLink>
        </NavLinksGroup>

        <LetsTalkButton 
          to="/contact" 
          $isDesktop={true} 
          onClick={closeNav}
          $isOpen={isOpen}
          $delay={0.4}
        >
          Let's Talk <span>&#x2709;</span>
        </LetsTalkButton>
      </DesktopMenu>

      {/* =================================== */}
      {/* 3. MOBILE PANEL (SLIDES IN, < 768px) */}
      {/* =================================== */}
      <NavPanel $isOpen={isOpen}>
        <MobileNavLink 
          to="/" 
          onClick={closeNav}
          $isOpen={isOpen}
          $delay={0}
        >
          Home
        </MobileNavLink>
        <MobileNavLink 
          to="/services" 
          onClick={closeNav}
          $isOpen={isOpen}
          $delay={0.1}
        >
          Services
        </MobileNavLink>
        <MobileNavLink 
          to="/about-team" 
          onClick={closeNav}
          $isOpen={isOpen}
          $delay={0.2}
        >
          Their Stories
        </MobileNavLink>
        <MobileNavLink 
          to="/about-us" 
          onClick={closeNav}
          $isOpen={isOpen}
          $delay={0.3}
        >
          Our Story
        </MobileNavLink>
        <MobileNavLink 
          to="/portfolio" 
          onClick={closeNav}
          $isOpen={isOpen}
          $delay={0.4}
        >
          Varnan
        </MobileNavLink>

        <LetsTalkButton 
          to="/contact" 
          onClick={closeNav}
          $isOpen={isOpen}
          $delay={0.5}
        >
          Let's Talk <span>&#x2709;</span>
        </LetsTalkButton>
      </NavPanel>

      {/* Overlay for mobile */}
      <Overlay $isOpen={isOpen} onClick={closeNav} />
    </>
  );
}

export default Navbar;