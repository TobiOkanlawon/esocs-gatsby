import React from "react";
import CenterAlignedContainer from "../shared/CenterAlignedContainer";
import styled from "styled-components";
import {
  CenterButtonContainer,
  StyledSectionContainer,
  pagePadding,
} from "../../constants/css";
import { RightIconButton as Button } from "../shared/Button";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BlueHeading, Heading4, Paragraph } from "../shared/Text";
import TwoCardGrid from "../shared/TwoCardGrid";
import ReadMore from "../shared/ReadMore";

type CardProps = {
  id: string;
  title: string;
  subtitle: string;
  image: any;
  alt: string;
};

type NewsContainerProps = {
  data: any[];
  number: number;
};

const StyledNewsContainer = styled.div`
  display: flex;
`;

const StyledCard = styled.div`
  cursor: pointer;
  display: flex;
  gap: 14px;
  width: 540px;

  &:hover {
    background-color: #ebebeb;
    animation: scale-up 0.4s ease-in-out;
  }

  @keyframes scale-up {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.02);
    }

    100% {
      transform: scale(1);
    }
  }
`;

const StyledCardRight = styled.div`
  margin-left: 12px;
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  border-radius: 18px;
`;

const StyledHeading4 = styled(Heading4)`
  margin-bottom: 12px;
`;

const NewsCard: React.FC<CardProps> = ({ id, title, subtitle, image, alt }) => {
  return (
    <StyledCard>
      <div>
        <StyledGatsbyImage alt={alt} image={image} />
      </div>
      <StyledCardRight>
        <StyledHeading4 color="black">{title}</StyledHeading4>
        <Paragraph>{subtitle.slice(0, 100)}...</Paragraph>
        <ReadMore />
      </StyledCardRight>
    </StyledCard>
  );
};

export const NewsContainer: React.FC<NewsContainerProps> = ({
  data,
  number,
}) => {
  return (
    <TwoCardGrid>
      {data.map((n: any, index: number) => {
        const img = getImage(n.node.newsType.image.node.localFile);
        return (
          <NewsCard
            id={String(index)}
            title={n.node.newsType.title}
            subtitle={n.node.newsType.content}
            image={img}
            alt="Alt for now"
          />
        );
      })}
    </TwoCardGrid>
  );
};

const News = () => {
  const d = useStaticQuery(graphql`
    query {
      allWpNews {
        edges {
          node {
            newsType {
              title
              content
              image {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 500
                        height: 400
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                      )
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const allNews = d.allWpNews.edges;

  return (
    <StyledSectionContainer>
      <CenterAlignedContainer
        title="Latest News"
        subTitle="Explore inspiring stories, faith-filled insights and the latest updates in our news and blog section"
      />

      <NewsContainer number={2} data={allNews} />

      <CenterButtonContainer>
        <Button title="View more news" size="md" logoPosition="right" />
      </CenterButtonContainer>
    </StyledSectionContainer>
  );
};

export default News;
