import React from "react";
import Layout from "../layouts/PageLayout";
import { OUR_SERVICE_TIMES_BANNER } from "../constants/sectionIds";
import { getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Times from "../components/ServiceTimes/Times";
import Events from "../components/Home/Events";
import WatchAndListenAgain from "../components/Home/WatchAndListenAgain";
import { grayBackgroundColor } from "../constants/colors";

const cleanBanner = (data: any) => {
  const edges = data.allWpBanner.edges as any[];
  const bannerData = edges.findLast((v) => {
    return v.node.banners.bannerPage === OUR_SERVICE_TIMES_BANNER;
  });
  return bannerData;
};

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

const ServiceTimes = ({ data }) => {
  const d = cleanBanner(data);
  const img = getImage(d.node.banners.bannerImage.node.localFile);
  return (
    <Layout
      title={d.node.banners.bannerButtonText}
      subTitle={d.node.banners.bannerDescription}
      image={img}
    >
      <Times />
      <Events
        backgroundColor={grayBackgroundColor}
        data={cleanEvents(data.allWpEvent.edges)}
      />
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

export default ServiceTimes;
