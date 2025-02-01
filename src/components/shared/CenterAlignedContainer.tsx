import React from "react";
import styled from "styled-components";
import { BlueHeading, SubHeading } from "./Text";

type Props = {
  title: string;
  subTitle: string;
  titleColor?: string;
  subTitleColor?: string;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 48px;
`;

const CenterAlignedContainer: React.FC<Props> = ({
  title,
  subTitle,
  titleColor,
  subTitleColor,
}) => {
  return (
    <StyledContainer>
      <BlueHeading color={titleColor}>{title}</BlueHeading>
      <SubHeading color={subTitleColor}>{subTitle}</SubHeading>
    </StyledContainer>
  );
};

export default CenterAlignedContainer;
