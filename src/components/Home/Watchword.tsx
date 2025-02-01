import React from "react";
import styled from "styled-components";
import Button from "../shared/Button";
import BackgroundImage from "gatsby-background-image";
import { getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import { OUR_WATCHWORD_SECTION } from "../../constants/sectionIds";

const StyledBackgroundImage = styled(BackgroundImage)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
`;

const StyledContent = styled.p``;

const StyledHeading = styled.h2``;

const cleanWatchword = (data: any) => {
  let watchword = data.allWpSection.edges.findLast((e: any) => {
    return e.node.homeSection.id === OUR_WATCHWORD_SECTION;
  });

  watchword = watchword.node.homeSection;
  return watchword;
};

const WatchWord: React.FC = () => {
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
                      gatsbyImageData(width: 532, height: 529)
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

  const d = cleanWatchword(data);
  const img = getImage(d.image.node.localFile);
  const bgImage = convertToBgImage(img);

  return (
    <StyledBackgroundImage Tag="section" {...bgImage}>
      <StyledHeading>{d.title}</StyledHeading>
      <StyledContent>{d.content}</StyledContent>
      <Button
        type="primary"
        logoPosition="right"
        title="Learn more about us"
        size="md"
      />
    </StyledBackgroundImage>
  );
};

export default WatchWord;
