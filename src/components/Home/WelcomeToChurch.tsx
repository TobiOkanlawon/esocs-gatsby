import React from "react";
import styled from "styled-components";
import { HeadingThree, Paragraph, SubHeading } from "../shared/Text";
import { pagePadding } from "../../constants/css";

type Props = {
  title: string;
  subtitle: string;
  content: string;
};

const StyledWelcomeToChurchContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 48px;
  padding: 48px ${pagePadding}px;
`;

const StyledLeftSide = styled.div``;

const StyledRightSide = styled.div``;

const StyledHeading = styled(HeadingThree)`
  padding-bottom: 12px;
`;

const StyledSubHeading = styled(SubHeading)`
  padding: 24px 0px;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 24px 0px;
`;

const WelcomeToChurch: React.FC<Props> = ({ title, subtitle, content }) => {
  return (
    <StyledWelcomeToChurchContainer>
      <StyledLeftSide></StyledLeftSide>
      <StyledRightSide>
        <StyledHeading>{title}</StyledHeading>
        <StyledSubHeading>{subtitle}</StyledSubHeading>
        <StyledParagraph>{content}</StyledParagraph>
      </StyledRightSide>
    </StyledWelcomeToChurchContainer>
  );
};

export default WelcomeToChurch;
