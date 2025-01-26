import React from "react";
import CenterAlignedContainer from "../shared/CenterAlignedContainer";
import styled from "styled-components";
import { pagePadding } from "../../constants/css";
import Button from "../shared/Button";

type CardProps = {
  id: string;
  title: string;
  subtitle: string;
  image: any;
};

const StyledContainer = styled.div`
  padding: ${pagePadding};
`;

const StyledNewsContainer = styled.div`
  display: flex;
`;

const NewsCard: React.FC<CardProps> = ({ id, title, subtitle, image }) => {
  return <div></div>;
};

const News = () => {
  return (
    <StyledContainer>
      <CenterAlignedContainer
        title="Latest News"
        subTitle="Explore inspiring stories, faith-filled insights and the latest updates in our news and blog section"
      />
      <StyledNewsContainer />
      <Button
        title="View more news"
        type="primary"
        size="md"
        logoPosition="right"
      />
    </StyledContainer>
  );
};

export default News;
