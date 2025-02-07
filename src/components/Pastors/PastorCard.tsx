import React from 'react';
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled from "styled-components";

type CardProps = {
  image: IGatsbyImageData;
};

const StyledCard = styled.article``;

const Card: React.FC<CardProps> = ({image}) => {
  return (
    <StyledCard>
      <GatsbyImage
	alt="Alt for now"
	image={image}
      />
      
    </StyledCard>
  );
};

export default Card;
