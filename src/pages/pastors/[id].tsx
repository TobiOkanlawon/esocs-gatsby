import React from "react";
import Layout from "../../layouts/PageLayout";
import { PageProps, graphql } from "gatsby";
import { OUR_PASTORS_SECTION } from "../../constants/sectionIds";
import { getImage } from "gatsby-plugin-image";
import PastorInfo from "../../components/Pastors/PastorInfo";

const cleanPastors = (data: any) => {
  let ourPastorsSection = data.findLast((e: any) => {
    return e.node.banners.bannerPage === OUR_PASTORS_SECTION;
  });

  ourPastorsSection = ourPastorsSection.node.banners;

  return ourPastorsSection;
};

const getIndividualPastor = (data: any, id: string) => {
  return data.findLast((e) => {
    return e.node.id === id;
  }).node.pastors;
};

const Pastor: React.FC<PageProps> = ({ data, params }) => {
  const d = cleanPastors(data.allWpBanner.edges);
  const pastor = getIndividualPastor(data.allWpPastor.edges, params.id);
  const img = getImage(d.bannerImage.node.localFile);

  console.log(pastor);
  return (
    <Layout
      title={d.bannerButtonText}
      subTitle={d.bannerDescription}
      image={img}
    >
      <PastorInfo pastor={pastor} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allWpBanner {
      edges {
        node {
          banners {
            bannerPage
            bannerDescription
            bannerButtonText
            bannerImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1024)
                  }
                }
              }
            }
          }
        }
      }
    }
    allWpPastor {
      edges {
        node {
          id
          pastors {
            title
            firstName
            lastName
            designation
            facebookLink
            instagramLink
            xLink
            content
            pastorsImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(height: 360, aspectRatio: 1.0)
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

export default Pastor;
