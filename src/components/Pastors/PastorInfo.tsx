import React from "react";
import { StyledSectionContainer } from "../../constants/css";
import styled from "styled-components";
import Card from "./PastorCard";
import { getImage } from "gatsby-plugin-image";
import { Paragraph } from "../shared/Text";

type Props = {
  pastor: any;
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 12px;
`;

const StyledParagraph = styled(Paragraph)`
  /* To style the dangerous html */
  p {
    margin-bottom: 24px;
  }
`;

const PastorInfo: React.FC<Props> = ({ pastor }) => {
  const img = getImage(pastor.pastorsImage.node.localFile);
  return (
    <StyledSectionContainer>
      <Container>
        <Card
          id={pastor.id}
          image={img!}
          designation={pastor.designation}
          name={`${pastor.firstName} ${pastor.lastName}`}
          facebookLink={pastor.facebookLink}
          instagramLink={pastor.instagramLink}
          twitterLink={pastor.xLink}
          showViewProfileButton={false}
          title={pastor.title}
        />
        <StyledParagraph dangerouslySetInnerHTML={{ __html: pastor.content }} />
      </Container>
    </StyledSectionContainer>
  );
};

export default PastorInfo;
