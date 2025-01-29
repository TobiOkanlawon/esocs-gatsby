import React from "react";
import styled from "styled-components";
import { pagePadding } from "../../constants/css";
import { BlueHeading, Paragraph, SubHeading } from "../shared/Text";

type Props = {
  data: any;
};

type CardProp = {
  title: string;
  subtitle: string;
  content: string;
};

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px ${pagePadding}px;
  align-items: center;
  gap: 24px;
  background-color: white;
`;

const StyledCard = styled.div`
  min-height: 200px;
  height: 246px;
  padding: 48px 34px;
  min-width: 244px;
  width: 308px;
  flex-shrink: 1;
`;

const StyledBlueHeading = styled(BlueHeading)`
  margin-bottom: 12px;
`;

const StyledContent = styled(Paragraph)`
  padding: 24px 0px;
`;

const IconCard: React.FC<CardProp> = ({ title, subtitle, content }) => {
  return (
    <StyledCard>
      <StyledBlueHeading>{title}</StyledBlueHeading>
      <SubHeading>{subtitle}</SubHeading>
      <StyledContent>{content}</StyledContent>
    </StyledCard>
  );
};

const IconCards: React.FC<Props> = ({ data }) => {
  return (
    <StyledCardContainer>
      {data.map((d: any, i: number) => {
        return <IconCard {...d.node.homeBanner} key={i} />;
      })}
    </StyledCardContainer>
  );
};

export default IconCards;
