import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled from "styled-components";
import { Heading4, Paragraph } from "../shared/Text";
import { grayTextColor } from "../../constants/colors";
import ReadMore from "../shared/ReadMore";

type CardProps = {
  image: IGatsbyImageData;
  name: string;
  title: string;
};

const StyledCard = styled.article``;

const StyledGatsbyImage = styled(GatsbyImage)``;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 12px 0px;
`;

const StyledHeading4 = styled(Heading4)`
  font-weight: bold;
  color: ${grayTextColor};
`;

const StyledSocialMediaContainer = styled.div``;

const Card: React.FC<CardProps> = ({ image, name, title }) => {
  const handleRouteToPastorPage = () => {};
  return (
    <StyledCard>
      <StyledGatsbyImage alt="Alt for now" image={image} />
      <StyledContainer>
        <StyledHeading4>{name}</StyledHeading4>
        <Paragraph>{title}</Paragraph>
        <StyledSocialMediaContainer></StyledSocialMediaContainer>
        <ReadMore onClick={handleRouteToPastorPage}>View Profile</ReadMore>
      </StyledContainer>
    </StyledCard>
  );
};

export default Card;
