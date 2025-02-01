import React, { useState } from "react";
import styled from "styled-components";

import BackgroundImage from "gatsby-background-image";

type SliderType = any;

type Props = {
  data: SliderType[];
};

type SliderTrackerButtonProps = {
  number: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  min-height: 90vh;
  height: 640px;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 2000px rgba(22, 21, 21, 0.3);
`;

const StyledContainer = styled.ul`
  list-style: none;
  margin-bottom: 24px;
  overflow: hidden;
  display: flex;
`;

const StyledSliderTrackerButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 5;
`;

const StyledSliderTrackerButton = styled.button<{ $active: boolean }>`
  border: 2px solid rebeccapurple;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  margin-right: 6px;
  background-color: ${(props) => (props.$active ? "white" : "transparent")};
  fill: ${(props) => (props.$active ? "white" : "transparent")};
`;

const SliderTrackerButtons: React.FC<SliderTrackerButtonProps> = ({
  number,
  activeIndex,
  setActiveIndex,
}) => {
  return (
    <StyledSliderTrackerButtonContainer>
      {new Array(number).fill(number).map((_, index) => {
        return (
          <StyledSliderTrackerButton
            $active={activeIndex == index}
            onClick={() => setActiveIndex(index)}
          />
        );
      })}
    </StyledSliderTrackerButtonContainer>
  );
};

const Slider: React.FC<Props> = ({ data }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const setActiveImage = (index: number) => {
    if (data.length > index) {
      return;
    }
    if (index < 0) return;

    setImageIndex(index);
  };

  return (
    <StyledContainer>
      {data.map((s) => {
        return (
          <StyledBackgroundImage
            Tag="li"
            fluid={s.sliders.sliderImage.node.localFile.childImageSharp.fluid}
          ></StyledBackgroundImage>
        );
      })}
      <SliderTrackerButtons
        number={data.length}
        activeIndex={imageIndex}
        setActiveIndex={setActiveImage}
      />
    </StyledContainer>
  );
};

export default Slider;
