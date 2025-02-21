import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled from "styled-components";
import { Heading4, Paragraph } from "../shared/Text";
import { grayTextColor, primaryRed } from "../../constants/colors";
import ReadMore from "../shared/ReadMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faSquareXTwitter,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

type CardProps = {
  image: IGatsbyImageData;
  name: string;
  title: string;
  designation: string;
  facebookLink?: string;
  instagramLink?: string;
  twitterLink?: string;
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

const StyledSocialMediaContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${primaryRed};
  cursor: pointer;

  &:hover {
    animation: scale-up 0.4s ease-in-out;
  }
`;

const Card: React.FC<CardProps> = ({
  image,
  name,
  title,
  designation,
  facebookLink,
  instagramLink,
  twitterLink,
}) => {
  const handleRouteToPastorPage = () => {};

  const routeToTwitter = () => {};
  const routeToFacebook = () => {};
  const routeToInstagram = () => {};

  return (
    <StyledCard>
      <StyledGatsbyImage alt="Alt for now" image={image} />
      <StyledContainer>
        <StyledHeading4>
          {title} {name}
        </StyledHeading4>
        <Paragraph>{designation}</Paragraph>
        <StyledSocialMediaContainer>
          {facebookLink && (
            <StyledFontAwesomeIcon
              onClick={routeToFacebook}
              icon={faFacebookF}
            />
          )}
          {instagramLink && (
            <StyledFontAwesomeIcon
              onClick={routeToInstagram}
              icon={faInstagram}
            />
          )}
          {twitterLink && (
            <StyledFontAwesomeIcon onClick={routeToTwitter} icon={faXTwitter} />
          )}
        </StyledSocialMediaContainer>
        <ReadMore onClick={handleRouteToPastorPage}>View Profile</ReadMore>
      </StyledContainer>
    </StyledCard>
  );
};

export default Card;
