import React from "react";
import {
  CenterButtonContainer,
  StyledSectionContainer,
} from "../../constants/css";
import CenterAlignedContainer from "../shared/CenterAlignedContainer";
import PastorGrid from "../shared/PastorGrid";
import { RightIconButton as Button } from "../shared/Button";
import { navigate } from "gatsby";

const MeetOurPastors = () => {
  const routeToPastors = () => {
    navigate("/pastors");
  };

  return (
    <StyledSectionContainer color="#F5F5F5">
      <CenterAlignedContainer
        title="Meet Our Pastors"
        subTitle="Meet our visionary founder and our dedicated pastoral team"
      />
      <PastorGrid number={3} />
      <CenterButtonContainer>
        <Button onClick={routeToPastors} size="md" title="View More" />
      </CenterButtonContainer>
    </StyledSectionContainer>
  );
};

export default MeetOurPastors;
