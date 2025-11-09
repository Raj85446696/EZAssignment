import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ButtonWrapper = styled(NavLink)`
  display: inline-block;
  padding: 0.6rem 1.25rem;

  font-family: var(--secondaryFont, "Montserrat");
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 50px;
  cursor: pointer;

  background-color: transparent;
  border: 2px solid var(--primary-500);
  color: var(--primary-500);

  transition: var(--transition);

  &:hover {
    background-color: var(--primary-500);
    color: var(--white);
  }
`;

function BackServiceBtn() {
  return <ButtonWrapper to="/services">Back</ButtonWrapper>;
}

export default BackServiceBtn;
