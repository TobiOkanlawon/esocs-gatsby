import React from "react";
import styled from "styled-components";
import { RightIconButton as Button } from "../shared/Button";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { OUR_WATCHWORD_SECTION } from "../../constants/sectionIds";
import { BlueHeading, Paragraph } from "../shared/Text";

type Props = {
  showButton?: boolean;
};

const BackgroundWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 48px;
  width: 100%;
  height: 400px; /* Adjust height */
  overflow: hidden;
  gap: 18px;

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Push behind content */
  }

  .content {
    position: relative;
    z-index: 1;
    color: white;
    text-align: center;
    padding: 100px;
  }
`;

const StyledContent = styled(Paragraph)`
  font-size: 2em;
  font-weight: bold;
  width: 55%;
  text-align: center;
  color: white;
  margin: 12px 0px;
`;

const StyledHeading = styled(BlueHeading)`
  color: white;
  font-size: 1.2em;
`;

const cleanWatchword = (data: any) => {
  let watchword = data.allWpSection.edges.findLast((e: any) => {
    return e.node.homeSection.id === OUR_WATCHWORD_SECTION;
  });

  watchword = watchword.node.homeSection;
  return watchword;
};

const WatchWord: React.FC<Props> = ({ showButton = true }) => {
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

  return (
    <BackgroundWrapper>
      <GatsbyImage image={img!} className="background-image" />
      <StyledHeading>{d.title}</StyledHeading>
      <StyledContent>{d.content}</StyledContent>
      {showButton && (
        <Button
          type="primary"
          logoPosition="right"
          title="Learn more about us"
          size="md"
        />
      )}
    </BackgroundWrapper>
  );
};

export default WatchWord;
