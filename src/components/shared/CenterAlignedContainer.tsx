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

const StyledBlueHeading = styled(BlueHeading)`
  font-weight: bold;
  font-size: 2em;
`;

const CenterAlignedContainer: React.FC<Props> = ({
  title,
  subTitle,
  titleColor,
  subTitleColor,
}) => {
  return (
    <StyledContainer>
      <StyledBlueHeading color={titleColor}>{title}</StyledBlueHeading>
      <SubHeading color={subTitleColor}>{subTitle}</SubHeading>
    </StyledContainer>
  );
};

export default CenterAlignedContainer;
