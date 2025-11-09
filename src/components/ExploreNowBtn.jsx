import React from "react";
import styled from "styled-components"; // 1. Import
import arrow from "../assets/services/Arrow.svg";
import { NavLink } from "react-router-dom";

const ButtonWrapper = styled(NavLink)`
  /* Use NavLink as the base */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  color: var(--black);
  font-family: var(--secondaryFont, "Montserrat");

  font-size: 1rem;
  font-weight: 500;

  transition: var(--transition);

  &:hover {
    transform: scale(1.05);
    color: var(--primary-500);
  }

  img {
    width: 100%;
    height: 30px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

function ExploreNowBtn({ text = "Explore Now", link = "/portfolio" }) {
  return (
    <ButtonWrapper to={link}>
      {text}
      <img src={arrow} alt="" />
    </ButtonWrapper>
  );
}

export default ExploreNowBtn;
