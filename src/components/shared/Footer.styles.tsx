import styled from "styled-components";
import { Link } from "gatsby";

export const StyledFooter = styled.footer`
  grid-area: footer;
  background-color: #011b33;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 48px 54px;
  height: 120px;
  max-height: 480px;
`;

export const StyledFooterColumns = styled.div``;

export const StyledFooterColumnHeader = styled.h3`
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 12px;
`;

export const StyledFooterLink = styled(Link)`
  display: block;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const StyledFooterLogoColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
`;
