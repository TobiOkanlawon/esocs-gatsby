import React from "react";
import { StyledSectionContainer as Container } from "../../constants/css";
import styled from "styled-components";
import { BlueHeading, Paragraph } from "../shared/Text";

const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.`;

const StyledSectionContainer = styled(Container)`
  display: grid;
  grid-template-columns: 3fr 4fr;
`;

const StyledLeft = styled.div``;
const StyledRight = styled.div``;

const StyledBlueHeading = styled(BlueHeading)`
  font-weight: bold;
  line-height: 50px;
  width: 80%;
`;

const Vision = () => {
  return (
    <StyledSectionContainer>
      <StyledLeft>
        <StyledBlueHeading size="2.5em">
          The vision of our church started in a place of stay.
        </StyledBlueHeading>
      </StyledLeft>
      <StyledRight>
        <Paragraph>{content}</Paragraph>
      </StyledRight>
    </StyledSectionContainer>
  );
};

export default Vision;
