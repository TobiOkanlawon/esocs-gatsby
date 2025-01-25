import React from "react";
import styled from "styled-components";
import { pagePadding, h3 } from "../../constants/css";
import { grayTextColor, primaryBlue, primaryRed } from "../../constants/colors";

type Props = {
  data: any;
};

type CardProp = {
  title: string;
  subtitle: string;
  content: string;
};

const StyledCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0px ${pagePadding}px;
  background-color: white;
`;

const StyledCard = styled.div`
  height: 178px;
  min-width: 244px;
`;

const StyledCardTitle = styled.h2`
  color: ${primaryBlue};
  font-size: ${h3};
  font-family: "Libre Baskerville", serif;
  padding-bottom: 12px;
`;

const StyledSubtitle = styled.p`
  color: ${primaryRed};
`;

const StyledContent = styled.p`
  color: ${grayTextColor};
  font-family: "Raleway", sans-serif;
  padding: 24px 0px;
`;

const IconCard: React.FC<CardProp> = ({ title, subtitle, content }) => {
  return (
    <StyledCard>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledSubtitle>{subtitle}</StyledSubtitle>
      <StyledContent>{content}</StyledContent>
    </StyledCard>
  );
};

const IconCards: React.FC<Props> = ({ data }) => {
  return (
    <StyledCardContainer>
      {data.map((d: any) => {
        return <IconCard {...d.node.homeBanner} />;
      })}
    </StyledCardContainer>
  );
};

export default IconCards;
