import React from "react";
import CenterAlignedContainer from "../shared/CenterAlignedContainer";
import styled from "styled-components";
import { StyledSectionContainer, pagePadding } from "../../constants/css";
import { RightIconButton as Button } from "../shared/Button";

type CardProps = {
  id: string;
  title: string;
  subtitle: string;
  image: any;
};

const StyledNewsContainer = styled.div`
  display: flex;
`;

const NewsCard: React.FC<CardProps> = ({ id, title, subtitle, image }) => {
  return <div></div>;
};

const NewsContainer = ({ data }) => {
  return (
    <StyledNewsContainer>
      {data.map((n: any) => {
        return <NewsCard title={n.title} />;
      })}
    </StyledNewsContainer>
  );
};

const News: React.FC<NewsProps> = ({ data }) => {
  return (
    <StyledSectionContainer>
      <CenterAlignedContainer
        title="Latest News"
        subTitle="Explore inspiring stories, faith-filled insights and the latest updates in our news and blog section"
      />

      <Button
        title="View more news"
        type="primary"
        size="md"
        logoPosition="right"
      />
    </StyledSectionContainer>
  );
};

export default News;
