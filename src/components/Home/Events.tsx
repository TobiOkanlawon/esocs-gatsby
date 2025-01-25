import React from "react";
import styled from "styled-components";
import CenterAlignedContainer from "../shared/CenterAlignedContainer";
import { BlueHeading, SmallText, SubHeading } from "../shared/Text";
import { grayTextColor } from "../../constants/colors";

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

const StyledCard = styled.div``;

const StyledEventsContainer = styled.div`
  display: flex;
`;

const StyledCardBottom = styled.div``;

const Event: React.FC<EventDataType> = ({
  title,
  description,
  startTime,
  endTime,
  date,
}) => {
  const dateString = date;
  const dateObject = new Date(dateString);

  console.log(dateObject);
  return (
    <StyledCard>
      {/* the image container*/}
      <div></div>
      <StyledCardBottom>
        <BlueHeading color={grayTextColor}>{title}</BlueHeading>
        <SubHeading>{description}</SubHeading>
        <div>
          <SmallText>
            {startTime} - {endTime}
          </SmallText>
          <SmallText>{dateObject.toLocaleDateString()}</SmallText>
        </div>
      </StyledCardBottom>
    </StyledCard>
  );
};

const Events: React.FC<Props> = ({ data }) => {
  return (
    <StyledContainer>
      <CenterAlignedContainer
        title="Upcoming Events"
        subTitle="Stay connected and inspired with our upcoming events"
      />
      <StyledEventsContainer>
        {data.map((ev: EventDataType) => {
          return <Event key={ev.id} {...ev} />;
        })}
      </StyledEventsContainer>
    </StyledContainer>
  );
};

export default Events;
