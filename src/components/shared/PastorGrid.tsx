import React from "react";
import { PastorType } from "../../libs/types";
import Card from "../Pastors/PastorCard";
import styled from "styled-components";
import breakPoints from "../../constants/breakPoints";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

type Props = {
  number: number;
};

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(360px, 1fr));
  grid-align: center;
  grid-gap: 32px;

  @media (max-width: ${breakPoints.smallScreen}) {
    grid-template-columns: 1fr;
  }
`;

const PastorGrid: React.FC<Props> = ({ number }) => {
  const data = useStaticQuery(graphql`
    query GetPastors {
      allWpPastor {
        edges {
          node {
            pastors {
              pastorsName
              designation
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
  `);

  const pastors = data.allWpPastor.edges.slice(0, number);

  return (
    <StyledContainer>
      {pastors.map((p) => {
        const img = getImage(p.node.pastors.pastorsImage.node.localFile);
        return (
          <Card
            image={img!}
            name={p.node.pastors.pastorsName}
            title={p.node.pastors.designation}
          />
        );
      })}
    </StyledContainer>
  );
};

export default PastorGrid;
