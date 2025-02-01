import React from "react";
import styled from "styled-components";
import { Paragraph, SubHeading } from "../shared/Text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { SOWING_SEED_ONE_SECTION } from "../../constants/sectionIds";
import Button from "../shared/Button";

const StyledContainer = styled.div`
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
  margin: 8px 0px;
  font-weight: bold;
`;

const cleanSowingSeeds = (data: any) => {
  const d = data.allWpSection.edges;
  let welcomeToChurch = d.findLast((e: any) => {
    return e.node.homeSection.id === SOWING_SEED_ONE_SECTION;
  });

  welcomeToChurch = welcomeToChurch.node.homeSection;

  return welcomeToChurch;
};

const SowingSeeds = () => {
  const data = useStaticQuery(graphql`
    {
      allWpSection {
        edges {
          node {
            homeSection {
              title
              subtitle
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
        <StyledSubHeading>{d.title}</StyledSubHeading>
        <StyledParagraph size="32px">{d.content}</StyledParagraph>
        <Button
          title="GIVE NOW"
          type="primary"
          logo=""
          size="md"
          logoPosition="right"
        />
      </StyledRight>
    </StyledContainer>
  );
};

export default SowingSeeds;
