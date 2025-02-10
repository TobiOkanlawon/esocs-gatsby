import React from "react";
import styled from "styled-components";
import breakPoints from "../../constants/breakPoints";

type Props = {
  children: React.ReactNode;
};

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(540px, 1fr));
  grid-gap: 12px;
  justify-items: center;
  padding: 24px 0px;

  @media (max-width: ${breakPoints.smallScreen}) {
    grid-template-columns: 1fr;
  }
`;

const TwoCardGrid: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default TwoCardGrid;
