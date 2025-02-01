import React, { useEffect, useRef, useState } from "react";
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
  width: 100vw;
  max-width: 100vw;
  min-height: 90vh;
  height: 640px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 2000px rgba(22, 21, 21, 0.3);
`;

const StyledContainer = styled.section`
  overflow: hidden;
  margin-bottom: 24px;
`;

const StyledSliderContainer = styled.ul`
  list-style: none;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
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
  const counter = useRef(0);

  const setActiveImage = (index: number) => {
    if (data.length < index) {
      setImageIndex(index % data.length);
      return;
    }

    if (index < 0) return;

    setImageIndex(index);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      counter.current = counter.current + 1;
      setActiveImage(counter.current);
      console.log("IMG IND:", imageIndex);
      console.log("COUNTER: ", counter);
    }, 3000);

    return () => clearTimeout(timeout);
  });

  return (
    <StyledContainer>
      <StyledSliderContainer>
        {data.map((s, i) => {
          // this is what makes it slide
          if (i !== imageIndex) return <></>;
          return (
            <StyledBackgroundImage
              Tag="li"
              fluid={s.sliders.sliderImage.node.localFile.childImageSharp.fluid}
            />
          );
        })}
      </StyledSliderContainer>
      <SliderTrackerButtons
        number={data.length}
        activeIndex={imageIndex}
        setActiveIndex={setActiveImage}
      />
    </StyledContainer>
  );
};

export default Slider;
