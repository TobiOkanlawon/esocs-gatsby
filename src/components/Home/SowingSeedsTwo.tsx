import React from "react";
import styled from "styled-components";
import { BlueHeading, Paragraph, SubHeading } from "../shared/Text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { SOWING_SEED_TWO_SECTION } from "../../constants/sectionIds";
import Button from "../shared/Button";
import { StyledSectionContainer as Container } from "../../constants/css";

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
`;

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
`;

const StyledSubHeading = styled(SubHeading)``;

const StyledParagraph = styled(Paragraph)`
  margin: 14px 0px;
`;

const StyledBlueHeading = styled(BlueHeading)`
  width: 60%;
`;

const cleanSowingSeeds = (data: any) => {
  const d = data.allWpSection.edges;
  let sowingSeends = d.findLast((e: any) => {
    return e.node.homeSection.id === SOWING_SEED_TWO_SECTION;
  });

  sowingSeends = sowingSeends.node.homeSection;

  return sowingSeends;
};

const SowingSeedsTwo = () => {
  const data = useStaticQuery(graphql`
    {
      allWpSection {
        edges {
          node {
            homeSection {
              title
              content
              id
              image {
                node {
                  id
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        width: 532
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

  const d = cleanSowingSeeds(data);

  const img = getImage(d.image.node.localFile);

  return (
    <StyledContainer>
      <GatsbyImage image={img!} alt="Alt for now" />
      <StyledRight>
        <StyledBlueHeading>{d.title}</StyledBlueHeading>
        <StyledParagraph>{d.content}</StyledParagraph>
        <Button
          title="GIVE NOW"
          type="primary"
          logo=""
          size="sm"
          logoPosition="right"
        />
      </StyledRight>
    </StyledContainer>
  );
};

export default SowingSeedsTwo;
