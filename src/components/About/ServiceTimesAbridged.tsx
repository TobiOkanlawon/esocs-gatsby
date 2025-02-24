import React from "react";
import { StyledSectionContainer } from "../../constants/css";
import CenterAlignedContainer from "../shared/CenterAlignedContainer";
import TwoCardGrid from "../shared/TwoCardGrid";
import styled from "styled-components";
import { BlueHeading, Paragraph } from "../shared/Text";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

type CardProps = {
  icon: IGatsbyImageData;
  title: string;
  content: string;
};

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2px;
  max-width: 600px;
`;

const StyledLeft = styled.div``;

const StyledRight = styled.div`
  display: inline-block;
`;

const StyledBlueHeading = styled(BlueHeading)`
  font-weight: bold;
`;

const Card: React.FC<CardProps> = ({ icon, title, content }) => {
  return (
    <StyledCard>
      <StyledLeft>
        <GatsbyImage image={icon} alt="Alt for now" />
      </StyledLeft>
      <StyledRight>
        <StyledBlueHeading size="24px">{title}</StyledBlueHeading>
        <Paragraph dangerouslySetInnerHTML={{ __html: content }} />
      </StyledRight>
    </StyledCard>
  );
};

const ServiceTimes = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpService(limit: 2) {
        edges {
          node {
            services {
              serviceTitle
              serviceTime
              imageIcon {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(height: 124)
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
      <CenterAlignedContainer
        title="Our Church Service Times"
        subTitle="Explore inspiring stories, faith-filled insights and the latest updates in our news and blog section"
      />
      <TwoCardGrid>
        {data.allWpService.edges.map((t: any) => {
          const d = t.node.services;
          const img = getImage(d.imageIcon.node.localFile);
          return (
            <Card title={d.serviceTitle} content={d.serviceTime} icon={img!} />
          );
        })}
      </TwoCardGrid>
    </StyledSectionContainer>
  );
};

export default ServiceTimes;
