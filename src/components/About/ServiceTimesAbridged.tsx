import React from "react";
import { StyledSectionContainer } from "../../constants/css";
import CenterAlignedContainer from "../shared/CenterAlignedContainer";
import TwoCardGrid from "../shared/TwoCardGrid";
import styled from "styled-components";
import { BlueHeading, Paragraph } from "../shared/Text";
import { graphql, useStaticQuery } from "gatsby";

type CardProps = {
  icon: string;
  title: string;
  content: string;
};

const StyledCard = styled.div``;

const StyledLeft = styled.div`
  padding: 0px 14px;
  display: inline-block;
`;

const StyledRight = styled.div`
  display: inline-block;
`;

const Card: React.FC<CardProps> = ({ icon, title, content }) => {
  return (
    <StyledCard>
      <StyledLeft>{icon}</StyledLeft>
      <StyledRight>
        <BlueHeading size="24px">{title}</BlueHeading>
        <Paragraph dangerouslySetInnerHTML={{ __html: content }} />
      </StyledRight>
    </StyledCard>
  );
};

const ServiceTimes = () => {
  // const data = useStaticQuery(graphql``);

  return (
    <StyledSectionContainer>
      <CenterAlignedContainer
        title="Our Church Service Times"
        subTitle="Explore inspiring stories, faith-filled insights and the latest updates in our news and blog section"
      />
      <TwoCardGrid>
        <Card />
      </TwoCardGrid>
    </StyledSectionContainer>
  );
};

export default ServiceTimes;
