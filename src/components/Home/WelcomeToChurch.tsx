import React from "react";
import styled from "styled-components";
import { BlueHeading, Paragraph, SubHeading } from "../shared/Text";
import { StyledSectionContainer } from "../../constants/css";
import { grayBackgroundColor } from "../../constants/colors";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type Props = {
  title: string;
  subtitle: string;
  content: string;
  image: any;
};

const StyledWelcomeToChurchContainer = styled(StyledSectionContainer)`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 48px;
  background-color: ${grayBackgroundColor};
`;

const StyledLeftSide = styled.div``;

const StyledRightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled(BlueHeading)`
  padding-bottom: 16px;
`;

const StyledSubHeading = styled(SubHeading)``;

const StyledParagraph = styled(Paragraph)`
  margin: 24px 0px;
`;

const WelcomeToChurch: React.FC<Props> = ({
  title,
  subtitle,
  content,
  image,
}) => {
  const img = getImage(image.node.localFile);
  return (
    <StyledWelcomeToChurchContainer>
      <StyledLeftSide>
        <GatsbyImage image={img!} alt="Alt for now" />
      </StyledLeftSide>
      <StyledRightSide>
        <StyledHeading>{title}</StyledHeading>
        <StyledSubHeading>{subtitle}</StyledSubHeading>
        <StyledParagraph>{content}</StyledParagraph>
      </StyledRightSide>
    </StyledWelcomeToChurchContainer>
  );
};

export default WelcomeToChurch;
