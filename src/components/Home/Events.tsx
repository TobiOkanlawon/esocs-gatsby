import React from "react";
import styled from "styled-components";
import CenterAlignedContainer from "../shared/CenterAlignedContainer";
import { Heading4, SmallText, SubHeading } from "../shared/Text";
import { grayBackgroundColor, grayTextColor } from "../../constants/colors";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import formatDate from "../../libs/formatDate";
import { StyledSectionContainer } from "../../constants/css";
import TwoCardGrid from "../shared/TwoCardGrid";

export type EventDataType = {
  id: string;
  title: string;
  description: string;
  host: string;
  date: Date;
  startTime: string;
  endTime: string;
  image: any;
  status: string;
  contactInformation: string;
};

type Props = {
  data: EventDataType[];
  backgroundColor?: string;
};

const StyledContainer = styled.section``;

const StyledCard = styled.div`
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
  border-radius: 18px;
  padding: 14px;
  padding-bottom: 24px;
  width: 540px;

  &:hover {
    animation: scale-up 0.4s ease-in-out;
    cursor: pointer;
  }
`;

const StyledCardBottom = styled.div``;

const StyledEventTitle = styled(Heading4)`
  padding-top: 14px;
  padding-bottom: 4px;
`;

const StyledImageContainer = styled.div`
  border-radius: 18px;
`;

const StyledEventDescription = styled(SubHeading)`
  padding-bottom: 14px;
`;

const StyledSmallText = styled(SmallText)`
  display: block;
  margin: 8px 0px;
`;

const StyledEventDateRow = styled.div``;

export const EventCard: React.FC<EventDataType> = ({
  title,
  description,
  startTime,
  endTime,
  date,
  image,
}) => {
  const dateString = date;
  const dateObject = new Date(dateString);

  const img = getImage(image.node.localFile);

  return (
    <StyledCard>
      <StyledImageContainer>
        <GatsbyImage image={img!} alt="Alt for now" />
      </StyledImageContainer>
      <StyledCardBottom>
        <StyledEventTitle color={grayTextColor}>{title}</StyledEventTitle>
        <StyledEventDescription>{description}</StyledEventDescription>
        <StyledEventDateRow>
          <StyledSmallText>
            {startTime} - {endTime}
          </StyledSmallText>
          <StyledSmallText>{formatDate(dateObject)}</StyledSmallText>
        </StyledEventDateRow>
      </StyledCardBottom>
    </StyledCard>
  );
};

const Events: React.FC<Props> = ({ data, backgroundColor }) => {
  return (
    <StyledSectionContainer color={backgroundColor}>
      <CenterAlignedContainer
        title="Upcoming Events"
        subTitle="Stay connected and inspired with our upcoming events"
      />
      <TwoCardGrid>
        {data.map((ev: EventDataType) => {
          return <EventCard key={ev.id} {...ev} />;
        })}
      </TwoCardGrid>
    </StyledSectionContainer>
  );
};

export default Events;
