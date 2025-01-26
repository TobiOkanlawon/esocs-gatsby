import React from "react";
import styled from "styled-components";
import Button from "../shared/Button";

type Props = {
  title: string;
  content: string;
};

const StyledContainer = styled.div``;

const StyledContent = styled.p``;

const StyledHeading = styled.h2``;

const WatchWord: React.FC<Props> = ({ title, content }) => {
  return (
    <StyledContainer>
      <StyledHeading>{title}</StyledHeading>
      <StyledContent>{content}</StyledContent>
      <Button
        type="primary"
        logoPosition="right"
        title="Learn more about us"
        size="md"
      />
    </StyledContainer>
  );
};

export default WatchWord;
