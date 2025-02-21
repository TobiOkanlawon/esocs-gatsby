import React from "react";
import { StyledSectionContainer } from "../../constants/css";
import styled from "styled-components";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import { BlueHeading, Paragraph } from "../shared/Text";
import { graphql, useStaticQuery } from "gatsby";

type CardProps = {
  image: IGatsbyImageData;
  title: string;
  content: string;
};

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 8px;
`;

const StyledLeft = styled.div``;

const StyledRight = styled.div``;

const StyledBlueHeading = styled(BlueHeading)`
  margin-bottom: 18px;
  font-weight: bold;
`;

const StyledParagraph = styled(Paragraph)``;

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card: React.FC<CardProps> = ({ image, title, content }) => {
  return (
    <StyledCard>
      <StyledLeft>
        <GatsbyImage alt="Alt for now" image={image} />
      </StyledLeft>
      <StyledRight>
        <StyledBlueHeading>{title}</StyledBlueHeading>
        <Paragraph dangerouslySetInnerHTML={{ __html: content }} />
      </StyledRight>
    </StyledCard>
  );
};

const Times = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpService {
        edges {
          node {
            services {
              serviceTitle
              serviceTime
              imageIcon {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(height: 200)
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

  return (
    <StyledSectionContainer>
      <StyledCardContainer>
        {data.allWpService.edges.map((d: any) => {
          const img = getImage(d.node.services.imageIcon.node.localFile);
          return (
            <Card
              content={d.node.services.serviceTime}
              title={d.node.services.serviceTitle}
              image={img!}
            />
          );
        })}
      </StyledCardContainer>
    </StyledSectionContainer>
  );
};

export default Times;
