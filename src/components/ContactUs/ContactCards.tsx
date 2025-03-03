import React from "react";
import { StyledSectionContainer } from "../../constants/css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  grayBackgroundColor,
  grayTextColor,
  primaryBlue,
} from "../../constants/colors";
import { BlueHeading, Paragraph } from "../shared/Text";

type CardProps = {
  icon: IconProp;
  title: string;
  subTitle: string;
};

const StyledCard = styled.article`
  padding: 54px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${grayBackgroundColor};
  border-radius: 18px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 48px;
  color: ${primaryBlue};
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`;

const StyledBlueHeading = styled(BlueHeading)`
  margin: 12px 0px;
  margin-bottom: 24px;
`;

const Card: React.FC<CardProps> = ({ icon, title, subTitle }) => {
  return (
    <StyledCard>
      <StyledFontAwesomeIcon icon={icon} />
      <StyledBlueHeading size="18px" color={grayTextColor}>
        {title}
      </StyledBlueHeading>
      <Paragraph>{subTitle}</Paragraph>
    </StyledCard>
  );
};

export const ContactCards = () => {
  return (
    <StyledSectionContainer>
      <StyledContainer>
        <Card
          title="Counseling Hotlines"
          subTitle="+234 701 567 2345, +234 802 345 6789"
          icon={faPhone}
        />
        <Card
          title="Church Address"
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et"
          icon={faLocationDot}
        />
      </StyledContainer>
    </StyledSectionContainer>
  );
};

export default Card;
