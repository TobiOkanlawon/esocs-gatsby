import React from "react";
import styled from "styled-components";
import { BlueHeading, SubHeading } from "./Text";

type Props = {
  title: string;
  subTitle: string;
};

const StyledContainer = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const CenterAlignedContainer: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <StyledContainer>
      <BlueHeading>{title}</BlueHeading>
      <SubHeading>{subTitle}</SubHeading>
    </StyledContainer>
  );
};

export default CenterAlignedContainer;
