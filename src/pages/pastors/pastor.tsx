import React from "react";
import Layout from "../../layouts/PageLayout";
import { graphql } from "gatsby";
import { OUR_PASTORS_SECTION } from "../../constants/sectionIds";
import { getImage } from "gatsby-plugin-image";

const cleanPastorData = (data: any) => {
  let ourPastorsSection = data.findLast((e: any) => {
    return e.node.homeSection.id === OUR_PASTORS_SECTION;
  });

  ourPastorsSection = ourPastorsSection.node.homeSection;

  return ourPastorsSection;
};

const Pastor = ({ data }) => {
  const d = cleanPastorData(data);
  const img = getImage(d.image.node.localFile);

  console.log(d);

  return (
    <Layout title={d.title} subTitle={d.content} image={img}>
      <> </>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
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
`;

export default Pastor;
