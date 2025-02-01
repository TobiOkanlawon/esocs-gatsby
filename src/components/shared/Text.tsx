import React from "react";
import styled from "styled-components";
import { grayTextColor, primaryBlue, primaryRed } from "../../constants/colors";

type Props = { children: React.ReactNode };

const defaultTextStyles = `
line-height: 30px;
`;

type TextProps = {
  color?: string;
  size?: string;
} & Props &
  (
    | React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
      >
    | React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
      >
  );

type STextProps = {
  $color?: string;
  $size?: string;
};

const StyledHeadingOne = styled.h1<STextProps>`
  line-height: 60px;
  font-family: "Libre Baskerville", serif;
  color: ${(props) => props.$color || "white"};
  font-size: 4em;
`;

const StyledBlueHeading = styled.h3<STextProps>`
  ${defaultTextStyles}
  font-family: "Libre Baskerville", serif;
  color: ${(props) => props.$color || primaryBlue};
  font-size: 1.8em;
`;

const StyledParagraph = styled.p<STextProps>`
  ${defaultTextStyles}
  font-family: "Raleway", sans-serif;
  color: ${(props) => props.$color || grayTextColor};
  line-height: 30px;
  font-size: ${(props) => props.$size || "1em"};
`;

const StyledSubHeading = styled.p<STextProps>`
  ${defaultTextStyles}
  font-family: "Raleway", sans-serif;
  color: ${(props) => props.$color || primaryRed};
  font-size: ${(props) => props.$size || "1.2em"};
`;

const StyledHeadingFour = styled.h4<STextProps>`
  ${defaultTextStyles}
  font-size: 1.2rem;
  font-family: "Libre Baskerville", serif;
  color: ${(props) => props.$color || primaryBlue};
`;

const StyledSmallText = styled.small<STextProps>``;

export const HeadingOne: React.FC<TextProps & { children?: string }> = ({
  children,
  color,
  size,
  ...rest
}) => {
  return (
    <StyledHeadingOne $color={color} $size={size} {...rest}>
      {children}
    </StyledHeadingOne>
  );
};

export const BlueHeading: React.FC<TextProps> = ({
  children,
  color,
  size,
  ...rest
}) => {
  return (
    <StyledBlueHeading $color={color} $size={size} {...rest}>
      {children}
    </StyledBlueHeading>
  );
};

export const Heading4: React.FC<TextProps> = ({
  children,
  color,
  size,
  ...rest
}) => {
  return (
    <StyledHeadingFour $color={color} $size={size} {...rest}>
      {children}
    </StyledHeadingFour>
  );
};

export const SubHeading: React.FC<TextProps> = ({
  children,
  size,
  color,
  ...rest
}) => {
  return (
    <StyledSubHeading $color={color} $size={size} {...rest}>
      {children}
    </StyledSubHeading>
  );
};

export const Paragraph: React.FC<TextProps> = ({
  children,
  color,
  size,
  ...rest
}) => {
  return (
    <StyledParagraph $color={color} $size={size} {...rest}>
      {children}
    </StyledParagraph>
  );
};

export const SmallText: React.FC<TextProps> = ({
  children,
  color,
  size,
  ...rest
}) => {
  return (
    <StyledSmallText $color={color} $size={size} {...rest}>
      {children}
    </StyledSmallText>
  );
};
