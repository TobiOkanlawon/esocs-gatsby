import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import Layout from "../layouts/HomeLayout";
import Slider from "../components/Home/Slider";
import IconCards from "../components/Home/IconCards";
import WelcomeToChurch from "../components/Home/WelcomeToChurch";
import Watchword from "../components/Home/Watchword";
import SowingSeeds from "../components/Home/SowingSeeds";
import WatchAndListenAgain from "../components/Home/WatchAndListenAgain";
import News from "../components/Home/News";
import Events, { EventDataType } from "../components/Home/Events";
import { WELCOME_TO_CHURCH_SECTION } from "../constants/sectionIds";

const cleanWTC = (data: any) => {
  console.log("WTC: ", data);
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

const IndexPage: React.FC<PageProps> = ({ data }) => {
  const sliders = data.allWpSlider.nodes;
  const iconCards = data.allWpIconcard.edges;
  const sections = data.allWpSection.edges as any[];
  const events = data.allWpEvent.edges as any[];

  const wtc = cleanWTC(sections);

  return (
    <Layout>
      <Slider data={sliders} />
      <IconCards data={iconCards} />
      <WelcomeToChurch {...wtc} image={wtc.image} />
      <Events data={cleanEvents(events)} />
      <Watchword />
      {false && <News data={[]} />}
      <SowingSeeds />
      <WatchAndListenAgain />
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
              localFile {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 1024) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
          sliderTitle
          sliderCaption
        }
      }
    }
    allWpIconcard(limit: 3) {
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
    allWpNews {
      edges {
        node {
          news {
            title
            date
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;
