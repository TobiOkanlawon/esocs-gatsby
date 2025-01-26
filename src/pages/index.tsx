import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Layout from "../layouts/HomeLayout";
import Slider from "../components/Home/Slider";
import IconCards from "../components/Home/IconCards";
import WelcomeToChurch from "../components/Home/WelcomeToChurch";
import Watchword from "../components/Home/Watchword";
import News from "../components/Home/News";
import Events, { EventDataType } from "../components/Home/Events";
import {
  WELCOME_TO_CHURCH_SECTION,
  OUR_WATCHWORD_SECTION,
} from "../constants/sectionIds";

const cleanWTC = (data: any) => {
  let welcomeToChurch = data.findLast((e: any) => {
    return e.node.homeSection.id === WELCOME_TO_CHURCH_SECTION;
  });

  welcomeToChurch = welcomeToChurch.node.homeSection;

  return welcomeToChurch;
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

const cleanWatchword = (data: any) => {
  let watchword = data.findLast((e: any) => {
    console.log(e);
    return e.node.homeSection.id === OUR_WATCHWORD_SECTION;
  });

  watchword = watchword.node.homeSection;
  return watchword;
};

const IndexPage: React.FC<PageProps> = ({ data }) => {
  /* NOTE: Actually exists */
  // TODO: Do the one for sliders;
  const sliders = data.allWpSlider.nodes;
  const iconCards = data.allWpIconcard.edges;
  const sections = data.allWpSection.edges as any[];
  const events = data.allWpEvent.edges as any[];

  return (
    <Layout>
      <Slider />
      <IconCards data={iconCards} />
      <WelcomeToChurch {...cleanWTC(sections)} />
      <Events data={cleanEvents(events)} />
      <Watchword {...cleanWatchword(sections)} />
      <News data={[]} />
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  {
    allWpSlider {
      nodes {
        sliders {
          buttonText
          sliderImage {
            node {
              mediaItemUrl
              altText
              srcSet
            }
          }
          sliderTitle
          sliderCaption
        }
      }
    }
    allWpIconcard {
      edges {
        node {
          id
          homeBanner {
            title
            subtitle
            content
          }
        }
      }
    }
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
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
    allWpEvent {
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

export const Head: HeadFC = () => <title>Home Page</title>;
