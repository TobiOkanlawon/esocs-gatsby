import React from "react";
import { PastorType } from "../../libs/types";
import Card from "../Pastors/PastorCard";
import styled from "styled-components";
import breakPoints from "../../constants/breakPoints";

type Props = {
  pastors: PastorType[];
};

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(360px, 1fr));
  grid-gap: 32px;

  @media (max-width: ${breakPoints.smallScreen}) {
    grid-template-columns: 1fr;
  }
`;

const PastorGrid: React.FC<Props> = ({ pastors }) => {
  return (
    <StyledContainer>
      {pastors.map((p) => {
        return <Card pastor={p} />;
      })}
    </StyledContainer>
  );
};

export default PastorGrid;
