import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../shared/Button";
import { BlueHeading, HeadingOne } from "../shared/Text";

type SliderType = any;

type Props = {
  data: SliderType[];
};

type SliderTrackerButtonProps = {
  number: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const StyledContainer = styled.section`
  height: 90vh;
  min-height: 90vh;
  max-height: 90vh;
  min-width: 100vw;
  overflow: hidden;
  margin-bottom: 24px;
`;

const StyledSliderContainer = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%; /* Adjust height */
  box-shadow: inset 0 0 0 2000px rgba(22, 21, 21, 0.4);

  .background-image {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 100vw;
    z-index: -1; /* Push behind content */
  }

  .content {
    position: relative;
    z-index: 1;
    color: white;
    text-align: center;
  }
`;

const StyledSliderTrackerButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
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

const StyledDescriptionContainer = styled.div`
  width: 60%;
  text-align: center;
  color: white;
  margin-bottom: 14px;
`;

const StyledInnerContainer = styled.div``;

const StyledHeadingOne = styled(HeadingOne)`
  text-align: center;
  margin-bottom: 14px;
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
    }, 3000);

    return () => clearTimeout(timeout);
  });

  return (
    <StyledContainer>
      <StyledSliderContainer>
        {data.map((s, i) => {
          // this is what makes it slide
          if (i !== imageIndex) return <></>;
          const img = getImage(s.sliders.sliderImage.node.localFile);
          console.log("S: ", s);
          return (
            <>
              <GatsbyImage
                alt="Alt for now"
                className="background-image"
                image={img!}
              />
              <div>
                <StyledHeadingOne
                  dangerouslySetInnerHTML={{ __html: s.sliders.sliderTitle }}
                  color="white"
                />
              </div>
              <StyledDescriptionContainer>
                <p
                  dangerouslySetInnerHTML={{
                    __html: s.sliders.sliderCaption,
                  }}
                />
              </StyledDescriptionContainer>
              <Button
                logoPosition="right"
                type="primary"
                size="lg"
                title={s.sliders.buttonText}
              />
            </>
          );
        })}
      </StyledSliderContainer>
      {false && (
        <div className="">
          <SliderTrackerButtons
            number={data.length}
            activeIndex={imageIndex}
            setActiveIndex={setActiveImage}
          />
        </div>
      )}
    </StyledContainer>
  );
};

export default Slider;
