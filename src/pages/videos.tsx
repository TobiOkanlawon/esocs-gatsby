import React from "react";
import { OUR_VIDEOS_BANNER } from "../constants/sectionIds";
import { graphql } from "gatsby";
import { getBanner } from "../libs/helpers";
import { getImage } from "gatsby-plugin-image";
import Layout from "../layouts/PageLayout";
import OnlineChurch from "../components/Videos/OnlineChurch";
import Sermons from "../components/Videos/Sermons";
import Events, { EventDataType } from "../components/Home/Events";

const Gallery = ({ data }) => {
  const banner = getBanner(OUR_VIDEOS_BANNER, data);
  const img = getImage(banner.node.banners.bannerImage.node.localFile);
  const events = data.allWpEvent.edges as any[];

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

  return (
    <Layout
      title={banner.node.banners.bannerButtonText}
      subTitle={banner.node.banners.bannerDescription}
      image={img}
    >
      <OnlineChurch />
      <Sermons />
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
  }
`;

export default Gallery;
