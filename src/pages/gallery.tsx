import React from "react";
import Layout from "../layouts/PageLayout";
import { getBanner } from "../libs/helpers";
import { PHOTO_GALLERY_BANNER } from "../constants/sectionIds";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StyledSectionContainer } from "../constants/css";
import Events, { EventDataType } from "../components/Home/Events";
import styled from "styled-components";
import { BlueHeading, Heading4, Paragraph } from "../components/shared/Text";
import TwoCardGrid from "../components/shared/TwoCardGrid";
import { grayTextColor } from "../constants/colors";

type CardProps = {
  thumbnailPicture: any;
  title: string;
  pictures: any[];
};

const StyledCard = styled.article`
  height: 360px;
  width: 480px;
  padding: 18px;
  border-radius: 18px;
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
  cursor: pointer;

  &:hover {
    animation: scale-up 0.4s ease-in-out;
  }
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  border-radius: 8px;
  height: 90%;
`;

const cleanEvents = (data: any) => {
  const d: any[] = [];
  data.forEach((j: any, i: number) => {
    const t: EventDataType = {
      title: j.node.events.eventTitle,
      id: String(i),
      description: j.node.events.description,
      host: j.node.events.speakerHost,
      date: j.node.events.date,
      startTime: j.node.events.startTime,
      endTime: j.node.events.endTime,
      image: j.node.events.image,
      status: j.node.events.status,
      contactInformation: j.node.events.contactInformation || "",
    };
    d.push(t);
  });
  return d;
};

const Card: React.FC<CardProps> = ({ thumbnailPicture, title, pictures }) => {
  return (
    <StyledCard>
      <StyledGatsbyImage image={thumbnailPicture} alt="Alt for now" />
      <BlueHeading size="18px" color={grayTextColor}>
        {title}
      </BlueHeading>
    </StyledCard>
  );
};

const GalleryCards = () => {
  return (
    <StyledSectionContainer>
      <TwoCardGrid>
        <Card
          title="Wonders of Grace"
          thumbnailPicture={<> </>}
          pictures={[]}
        />
      </TwoCardGrid>
    </StyledSectionContainer>
  );
};

const Gallery = ({ data }) => {
  const banner = getBanner(PHOTO_GALLERY_BANNER, data);
  const img = getImage(banner.node.banners.bannerImage.node.localFile);

  const events = data.allWpEvent.edges as any[];
  return (
    <Layout
      title={banner.node.banners.bannerButtonText}
      subTitle={banner.node.banners.bannerDescription}
      image={img}
    >
      <GalleryCards />
      <Events data={cleanEvents(events)} />
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
    allWpEvent(limit: 2) {
      edges {
        node {
          events {
            eventTitle
            description
            speakerhost
            date
            startTime
            endTime
            eventType
            image {
              node {
                id
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 540, height: 200)
                  }
                }
              }
            }
            status
            contactInformation
          }
        }
      }
    }
    allWpMyGallery {
      edges {
        node {
          gallery {
            name
            photos {
              thumbnailFullFile
            }
            images {
              node {
                id
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 540, height: 200)
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

export default Gallery;
