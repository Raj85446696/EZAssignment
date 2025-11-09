import React from "react";
import styled from "styled-components"; // 1. Import styled-components
import lineImg from "../assets/services/belowHeading.svg";

// styled components
const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-family: var(--secondaryFont, "Island Moments");
  font-size: 1rem;
  color: #3f476a;
  font-weight: 400;
  line-height: 1.3;
  margin: 0;
  padding: 0;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const UnderlineImage = styled.img`
  width: 80%;
  height: auto;
  margin-top: 0.5rem;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

function ServiceHeading({ title }) {
  return (
    <HeadingWrapper>
      <Title>{title}</Title>
      {/* line image below title same width*/}
      <UnderlineImage src={lineImg} alt="decorative underline" />
    </HeadingWrapper>
  );
}

export default ServiceHeading;
