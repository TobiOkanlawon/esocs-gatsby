import React from "react";
import styled from "styled-components";
import { Paragraph, SubHeading } from "../shared/Text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { SOWING_SEED_ONE_SECTION } from "../../constants/sectionIds";
import { RightIconButton as Button } from "../shared/Button";

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

const StyledSubHeading = styled(SubHeading)`
  font-weight: bold;
  font-family: "Libre Baskerville", serif;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 18px 0px;
  font-weight: bold;
  line-height: 36px;
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
        <Button title="GIVE NOW" size="md" logoPosition="right" />
      </StyledRight>
    </StyledContainer>
  );
};

export default SowingSeeds;
