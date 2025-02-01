import styled from "styled-components";

export const StyledBaseLayoutContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "content"
    "footer";
  min-height: 100vh;
`;

export const StyledInnerContainer = styled.main`
  grid-area: content;
`;
