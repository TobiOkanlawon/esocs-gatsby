import React from "react";
import styled from "styled-components";
import CenterAlignedContainer from "../shared/CenterAlignedContainer";
import { BlueHeading, Heading4, SmallText, SubHeading } from "../shared/Text";
import { grayBackgroundColor, grayTextColor } from "../../constants/colors";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import formatDate from "../../libs/formatDate";
import { StyledSectionContainer } from "../../constants/css";

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
};

const StyledContainer = styled.section``;

const StyledCard = styled.div`
  box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.38);
  border-radius: 18px;
  padding: 14px;
  padding-bottom: 24px;
`;

const StyledEventsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
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
  display: inline-block;
  margin-right: 8px;
`;

const StyledEventDateRow = styled.div``;

const Event: React.FC<EventDataType> = ({
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

const Events: React.FC<Props> = ({ data }) => {
  return (
    <StyledSectionContainer>
      <CenterAlignedContainer
        title="Upcoming Events"
        subTitle="Stay connected and inspired with our upcoming events"
      />
      <StyledEventsContainer>
        {data.map((ev: EventDataType) => {
          return <Event key={ev.id} {...ev} />;
        })}
      </StyledEventsContainer>
    </StyledSectionContainer>
  );
};

export default Events;
