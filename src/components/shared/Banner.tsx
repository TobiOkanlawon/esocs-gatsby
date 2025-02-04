/*
Renders the top banner component for pages. Banner is purposely relatively
positioned to allow for the component on the about page, or any other component that wants to position off the banner.

Renders a title and a subtitle with an image background
 */
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { HeadingOne, Paragraph } from "./Text";

export type BannerProps = {
  title: string;
  subTitle: string;
  image: any;
};

const StyledBannerContainer = styled.section`
  height: 55vh;
  min-height: 540px;
  max-height: 60vh;
  min-width: 100vw;
  overflow: hidden;
`;

const StyledBannerInnerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%; /* Adjust height */
  box-shadow: inset 0 0 0 2000px rgba(22, 21, 21, 0.4);

  .background-image {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 100vw;
    z-index: -1; /* Push behind content */
  }

  .content {
    position: relative;
    z-index: 1;
    color: white;
    text-align: center;
  }
`;

const StyledHeadingOne = styled(HeadingOne)`
  margin: 8px 0px;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
`;

const StyledContentContainer = styled.div`
  width: 70%;
  text-align: center;
`;

const Banner: React.FC<BannerProps> = ({ image, title, subTitle }) => {
  return (
    <StyledBannerContainer>
      <StyledBannerInnerContainer>
        {/* absolutely positioned image */}
        <GatsbyImage
          alt="Alt for now"
          className="background-image"
          image={image}
        />
        <StyledContentContainer className="content">
          <StyledHeadingOne size="3.2em">{title}</StyledHeadingOne>
          <StyledParagraph color="white">{subTitle}</StyledParagraph>
        </StyledContentContainer>
      </StyledBannerInnerContainer>
    </StyledBannerContainer>
  );
};

export default Banner;
