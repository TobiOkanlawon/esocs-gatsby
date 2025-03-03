import React from "react";
import styled from "styled-components";
import { BlueHeading, Paragraph } from "../shared/Text";
import { StyledSectionContainer } from "../../constants/css";
import { RightIconButton as Button } from "../shared/Button";
import { StaticImage, getImage } from "gatsby-plugin-image";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`;

const StyledLeftSide = styled.div``;
const StyledRightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledBlueHeading = styled(BlueHeading)`
  margin-bottom: 18px;
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 18px;
`;

const OnlineChurch = () => {
  return (
    <StyledSectionContainer>
      <StyledContainer>
        <StyledLeftSide>
          <StaticImage src="../../images/online-church.png" alt="Alt for now" />
        </StyledLeftSide>
        <StyledRightSide>
          <StyledBlueHeading bold>Online Church</StyledBlueHeading>
          <StyledParagraph>
            A, condimentum vitae sapien pellentesque habitant morbi tristique
            senectus et netus et malesuada fames. Eu scelerisque felis imperdiet
            proin fermentum leo vel orci porta non pulvinar neque laoreet
            suspendisse interdum.
          </StyledParagraph>
          <Button
            size="sm"
            onClick={() => {}}
            title="Watch Now"
            logoPosition="right"
          />
        </StyledRightSide>
      </StyledContainer>
    </StyledSectionContainer>
  );
};

export default OnlineChurch;
