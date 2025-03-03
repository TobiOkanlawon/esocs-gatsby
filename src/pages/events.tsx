import { PageProps, graphql } from "gatsby";
import * as React from "react";
import Layout from "../layouts/PageLayout";
import { getImage } from "gatsby-plugin-image";
import { StyledSectionContainer } from "../constants/css";
import TwoCardGrid from "../components/shared/TwoCardGrid";
import { EventCard, EventDataType } from "../components/Home/Events";
import { getBanner } from "../libs/helpers";
import { OUR_EVENTS_BANNER } from "../constants/sectionIds";
import WatchAndListenAgain from "../components/Home/WatchAndListenAgain";

const Page: React.FC<PageProps> = ({ data }) => {
  const events = data.allWpEvent.edges as any[];
  const banner = getBanner(OUR_EVENTS_BANNER, data);
  console.log(banner);
  const img = getImage(banner.node.banners.bannerImage.node.localFile);
  return (
    <Layout
      title={banner.node.banners.bannerButtonText}
      subTitle={banner.node.banners.bannerDescription}
      image={img!}
    >
      <StyledSectionContainer>
        <TwoCardGrid>
          {events.map((ev: any) => {
            return (
              <EventCard
                id={ev.node.id}
                title={ev.node.events.eventTitle}
                description={ev.node.events.description}
                date={ev.node.events.date}
                host={ev.node.events.speakerhost}
                startTime={ev.node.events.startTime}
                endTime={ev.node.events.endTime}
                status={ev.node.events.status}
                contactInformation={ev.node.events.contactInformation}
                image={ev.node.events.image}
              />
            );
          })}
        </TwoCardGrid>
      </StyledSectionContainer>
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
            bannerPage
            bannerDescription
          }
        }
      }
    }
    allWpEvent {
      edges {
        node {
          id
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

export default Page;
