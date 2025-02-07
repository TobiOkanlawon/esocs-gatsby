import React from "react";
import styled from "styled-components";
import breakPoints from "../../constants/breakPoints";

type Props = {
  children: React.ReactNode;
};

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(360px, 1fr));
  grid-gap: 12px;
  justify-items: center;

  @media (max-width: ${breakPoints.smallScreen}) {
    grid-template-columns: 1fr;
  }
`;

const ThreeCardGrid: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default ThreeCardGrid;
