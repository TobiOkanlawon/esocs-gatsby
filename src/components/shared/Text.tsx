import React from "react";
import styled from "styled-components";
import { grayTextColor, primaryBlue, primaryRed } from "../../constants/colors";
import { h3 } from "../../constants/css";

type Props = { children: React.ReactNode };

type TextProps = {
  color?: string;
  size?: string;
} & Props;

const StyledBlueHeading = styled.h3<{ $color?: string }>`
  font-family: "Raleway", sans-serif;
  color: ${(props) => props.$color || primaryBlue};
  font-size: 1.8em;
`;

const StyledParagraph = styled.p`
  font-family: "Raleway", sans-serif;
  color: ${grayTextColor};
`;

const StyledSubHeading = styled.p<{ $size?: string }>`
  font-family: "Raleway", sans-serif;
  color: ${primaryRed};
  font-size: ${(props) => props.$size || "1.4em"};
  font-family: "Libre Baskerville", serif;
`;

const StyledSmallText = styled.small``;

export const BlueHeading: React.FC<TextProps> = ({ children, color, size }) => {
  return (
    <StyledBlueHeading $color={color} size={size}>
      {children}
    </StyledBlueHeading>
  );
};

export const SubHeading: React.FC<Props> = ({ children }) => {
  return <StyledSubHeading>{children}</StyledSubHeading>;
};

export const Paragraph: React.FC<Props> = ({ children }) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export const SmallText: React.FC<TextProps> = ({ children, color }) => {
  return <StyledSmallText>{children}</StyledSmallText>;
};
