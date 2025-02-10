import styled from "styled-components";
/* PADDING, MARGIN AND ALL SPACINGS */
// PAGE PADDING IS INTENTIONALLY NOT GIVEN IN (PX)
// THIS IS SO THAT IT CAN BE CALCULATED
export const pagePadding = 84;

/* TEXT SIZES */
export const h3 = "1.4rem";

export const StyledSectionContainer = styled.section<{ $color?: string }>`
  ${(props) => props.color && `background-color: ${props.color}`};
  padding: 72px ${pagePadding}px;
`;

export const CenterButtonContainer = styled.div`
  margin: 24px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
