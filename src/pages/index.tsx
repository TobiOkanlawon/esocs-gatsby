import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Layout from "../layouts/HomeLayout";
import Slider from "../components/Home/Slider";
import IconCards from "../components/Home/IconCards";
import WelcomeToChurch from "../components/Home/WelcomeToChurch";
import { WELCOME_TO_CHURCH_SECTION } from "../constants/sectionIds";

const IndexPage: React.FC<PageProps> = ({ data }) => {
  /* NOTE: Actually exists */
  // TODO: Do the one for sliders;
  const sliders = data.allWpSlider.nodes;
  const iconCards = data.allWpIconcard.edges;
  const sections = data.allWpSection.edges as any[];

  let welcomeToChurch = sections.find((e) => {
    return (e.node.homeSection.id = WELCOME_TO_CHURCH_SECTION);
  });

  welcomeToChurch = welcomeToChurch.node.homeSection;

  return (
    <Layout>
      <Slider />
      <IconCards data={iconCards} />
      <WelcomeToChurch {...welcomeToChurch} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    allWpSlider {
      nodes {
        sliders {
          buttonText
          sliderImage {
            node {
              mediaItemUrl
              altText
              srcSet
            }
          }
          sliderTitle
          sliderCaption
        }
      }
    }
    allWpIconcard {
      edges {
        node {
          title
          homeBanner {
            title
            subtitle
            content
          }
        }
      }
    }
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
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;
