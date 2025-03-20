import React from "react";
import { StyledSectionContainer } from "../../constants/css";
import { graphql, useStaticQuery } from "gatsby";
import CenterAlignedContainer from "./CenterAlignedContainer";
import TwoCardGrid from "./TwoCardGrid";
import WatchAndListenAgain from "../Home/WatchAndListenAgain";

const Giving = () => {
  // const data = useStaticQuery(graphql``);
  <StyledSectionContainer>
    <CenterAlignedContainer
      title="Our Giving Options"
      subTitle="Send your offerings, tithes and contributions to the below account numbers"
    />
    <WatchAndListenAgain />
  </StyledSectionContainer>;
};

export default Giving;
