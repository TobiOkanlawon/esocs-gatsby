import React from "react";
import Layout from "../layouts/PageLayout";
import { CONTACT_US_BANNER } from "../constants/sectionIds";
import { getBanner } from "../libs/helpers";
import { getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { ContactCards } from "../components/ContactUs/ContactCards";
import ReachOutToUs from "../components/Home/ReachOut";
import WatchAndListenAgain from "../components/Home/WatchAndListenAgain";

const ContactUs = ({ data }) => {
  const banner = getBanner(CONTACT_US_BANNER, data);
  const img = getImage(banner.node.banners.bannerImage.node.localFile);

  return (
    <Layout
      title={banner.node.banners.bannerButtonText}
      subTitle={banner.node.banners.bannerDescription}
      image={img}
    >
      <ContactCards />
      <ReachOutToUs />
      <WatchAndListenAgain />
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

export default ContactUs;
