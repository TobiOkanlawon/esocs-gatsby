import React from "react";
import Layout from "../../layouts/PageLayout";
import { StyledSectionContainer } from "../../constants/css";
import Card from "../../components/Pastors/PastorCard";
import { getImage } from "gatsby-plugin-image";
import { PageProps, graphql } from "gatsby";
import { OUR_PASTORS_SECTION } from "../../constants/sectionIds";
import PastorGrid from "../../components/shared/PastorGrid";
import WatchAndListenAgain from "../../components/Home/WatchAndListenAgain";
import SowingSeedsTwo from "../../components/Home/SowingSeedsTwo";

const cleanPastorData = (data: any) => {
  const edges = data.allWpBanner.edges as any[];
  const bannerData = edges.findLast((v) => {
    return v.node.banners.bannerPage === OUR_PASTORS_SECTION;
  });
  return bannerData;
};

const Pastors: React.FC<PageProps> = ({ data }) => {
  const d = cleanPastorData(data);
  const img = getImage(d.node.banners.bannerImage.node.localFile);
  return (
    <Layout
      title={d.node.banners.bannerButtonText}
      subTitle={d.node.banners.bannerDescription}
      image={img}
    >
      <StyledSectionContainer>
        <PastorGrid />
      </StyledSectionContainer>
      <WatchAndListenAgain />
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
            bannerPage
          }
        }
      }
    }
  }
`;

export default Pastors;
