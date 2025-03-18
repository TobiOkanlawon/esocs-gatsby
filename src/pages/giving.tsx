import React from "react";
import Layout from "../layouts/PageLayout";
import { PageProps, graphql } from "gatsby";
import { getBanner } from "../libs/helpers";
import { SEEDS_OF_LOVE_BANNER } from "../constants/sectionIds";
import { getImage } from "gatsby-plugin-image";

const Giving: React.FC<PageProps> = ({ data }) => {
  const banner = getBanner(SEEDS_OF_LOVE_BANNER, data);
  const img = getImage(banner.node.banners.bannerImage.node.localFile);
  return (
    <Layout
      title={banner.node.banners.bannerButtonText}
      subTitle={banner.node.banners.bannerDescription}
      image={img}
    >
      <> </>
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

export default Giving;
