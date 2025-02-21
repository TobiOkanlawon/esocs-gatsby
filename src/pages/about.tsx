import { PageProps, graphql } from "gatsby";
import * as React from "react";
import Layout from "../layouts/PageLayout";
import { getImage } from "gatsby-plugin-image";
import Vision from "../components/About/Vision";
import MeetOurPastors from "../components/About/PastorsAbridged";
import ServiceTimes from "../components/About/ServiceTimesAbridged";
import { CenterButtonContainer } from "../constants/css";
import { RightIconButton as Button } from "../components/shared/Button";
import WatchWord from "../components/Home/Watchword";
import SowingSeedsTwo from "../components/Home/SowingSeedsTwo";

const About: React.FC<PageProps> = ({ data }) => {
  const aboutUsNode = data.allWpBanner.edges[0].node.banners;
  const img = getImage(aboutUsNode.bannerImage.node.localFile);
  return (
    <Layout
      title={aboutUsNode.bannerButtonText}
      subTitle={aboutUsNode.bannerDescription}
      image={img}
    >
      <Vision />
      <MeetOurPastors />
      <ServiceTimes />
      <CenterButtonContainer>
        <Button size="md" title="View More" logoPosition="right" />
      </CenterButtonContainer>
      <WatchWord showButton={false} />
      <SowingSeedsTwo />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allWpBanner {
      edges {
        node {
          banners {
            bannerImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1024)
                  }
                }
              }
            }
            bannerButtonText
            bannerDescription
          }
        }
      }
    }
  }
`;

export default About;
