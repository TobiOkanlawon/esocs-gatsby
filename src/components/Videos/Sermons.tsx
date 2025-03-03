import React from "react";
import { StyledSectionContainer } from "../../constants/css";
import styled from "styled-components";
import { BlueHeading, Paragraph } from "../shared/Text";
import { RightIconButton as Button } from "../shared/Button";
import { grayBackgroundColor } from "../../constants/colors";
import { StaticImage } from "gatsby-plugin-image";

const StyledLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledRightSide = styled.div``;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`;

const StyledBlueHeading = styled(BlueHeading)`
  margin-bottom: 24px;
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 24px;
`;

const Sermons = () => {
  return (
    <StyledSectionContainer color={grayBackgroundColor}>
      <StyledContainer>
        <StyledLeftSide>
          <StyledBlueHeading bold>Sermons</StyledBlueHeading>
          <StyledParagraph>
            A, condimentum vitae sapien pellentesque habitant morbi tristique
            senectus et netus et malesuada fames. Eu scelerisque felis imperdiet
            proin fermentum leo vel orci porta non pulvinar neque laoreet
            suspendisse interdum.
          </StyledParagraph>
          <Button
            size="lg"
            onClick={() => {}}
            title="Visit our YouTube Channel"
            logoPosition="right"
          />
        </StyledLeftSide>
        <StyledRightSide>
          <StaticImage src="../../images/yt.png" alt="Alt for now" />
        </StyledRightSide>
      </StyledContainer>
    </StyledSectionContainer>
  );
};

export default Sermons;
