import React from "react";
import {
  CenterButtonContainer,
  StyledSectionContainer,
} from "../../constants/css";
import CenterAlignedContainer from "../shared/CenterAlignedContainer";
import PastorGrid from "../shared/PastorGrid";
import { RightIconButton as Button } from "../shared/Button";

const MeetOurPastors = () => {
  return (
    <StyledSectionContainer $color="#F5F5F5">
      <CenterAlignedContainer
        title="Meet Our Pastors"
        subTitle="Meet our visionary founder and our dedicated pastoral team"
      />
      <PastorGrid pastors={[]} />
      <CenterButtonContainer>
        <Button size="md" title="View More" />
      </CenterButtonContainer>
    </StyledSectionContainer>
  );
};

export default MeetOurPastors;
