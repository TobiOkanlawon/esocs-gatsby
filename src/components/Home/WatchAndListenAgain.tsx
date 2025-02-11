import React from "react";
import { StyledSectionContainer as Container } from "../../constants/css";
import styled from "styled-components";
import { primaryBlue } from "../../constants/colors";
import CenterAlignedContainer from "../shared/CenterAlignedContainer";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { Paragraph } from "../shared/Text";
import TwoCardGrid from "../shared/TwoCardGrid";

type CardProps = {
  icon: FontAwesomeIconProps["icon"];
  text: string;
};

const StyledContainer = styled(Container)`
  background-color: ${primaryBlue};
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  width: 480px;
  background-color: white;
  padding: 48px 24px;
  text-wrap: wrap;
  border-radius: 18px;
`;

const StyledParagraph = styled(Paragraph)`
  width: 60%;
  text-align: center;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${primaryBlue};
  font-size: 48px;
`;

const Card: React.FC<CardProps> = ({ icon, text }) => {
  return (
    <StyledCard>
      <StyledFontAwesomeIcon icon={icon} className="fa-light" />
      <StyledParagraph size="24px">{text}</StyledParagraph>
    </StyledCard>
  );
};

const WatchAndListenAgain = () => {
  return (
    <StyledContainer>
      <CenterAlignedContainer
        title="Watch and Listen Again"
        titleColor="#FFFFFF"
        subTitleColor="#FFFFFF"
        subTitle="Follow up on the word on the go or from anywhere in the world"
      />
      <TwoCardGrid>
        <Card icon={faVideo} text="Watch Live Sermons or recaps here" />
        <Card
          icon={faVideo}
          text="See pictures of previous events and services here"
        />
      </TwoCardGrid>
    </StyledContainer>
  );
};

export default WatchAndListenAgain;
