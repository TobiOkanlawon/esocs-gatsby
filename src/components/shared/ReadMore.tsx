import React from "react";
import styled from "styled-components";
import { Paragraph } from "./Text";
import { readMoreBlue } from "../../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  children: React.ReactNode;
};

const StyledParagraph = styled(Paragraph)`
  color: ${readMoreBlue};
  font-weight: bold;
  display: inline-block;
  margin-right: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledReadMoreContainer = styled.span`
  display: inline-block;
  margin-top: 6px;
  cursor: pointer;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${readMoreBlue};
`;

const ReadMore: React.FC<Props> = ({ children }) => {
  const t = children || "Read More";
  return (
    <StyledReadMoreContainer>
      <StyledParagraph>{t}</StyledParagraph>
      <StyledFontAwesomeIcon icon={faArrowRight} />
    </StyledReadMoreContainer>
  );
};

export default ReadMore;
