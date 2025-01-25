import React from "react";
import styled from "styled-components";
import { grayTextColor, primaryRed } from "../../constants/colors";

type Props = { children: React.ReactNode };

const StyledHeadingThree = styled.h3`
  font-family: "Raleway", sans-serif;
  color: ${primaryRed};
`;

const StyledParagraph = styled.p`
  font-family: "Raleway", sans-serif;
  color: ${grayTextColor};
`;

export const HeadingThree: React.FC<Props> = ({ children }) => {
  return <StyledHeadingThree>{children}</StyledHeadingThree>;
};

export const SubHeading: React.FC<Props> = ({ children }) => {
  return <p>{children}</p>;
};

export const Paragraph: React.FC<Props> = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};
