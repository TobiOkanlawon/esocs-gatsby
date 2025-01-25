import React from "react";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import "./base.css";
import {
  StyledBaseLayoutContainer,
  StyledInnerContainer,
} from "./BaseLayout.styles";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <StyledBaseLayoutContainer>
      <Header />
      <StyledInnerContainer>{children}</StyledInnerContainer>
      <Footer />
    </StyledBaseLayoutContainer>
  );
};

export default Layout;
