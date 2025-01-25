import React from "react";
import Button from "./Button";
import HeaderLink from "./HeaderLink";
import "./header.css";
import styled from "styled-components";

const StyledHeader = styled.header`
  grid-area: header;
  width: 100vw;
  position: absolute;
  background-color: transparent;
`;

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ul>
          <img alt="logo" src="../../images/logo.png" />
          <p>The Eternal Sacred Order of The Cherubim & Seraphim</p>
        </ul>
        <ul>
          <li>
            <HeaderLink title="About us" href="/" />
          </li>
          <li>
            <HeaderLink title="About us" href="/" />
          </li>
          <li>
            <HeaderLink title="About us" href="/" />
          </li>
          <li>
            <HeaderLink title="About us" href="/" />
          </li>
          <li id="header-link-special">
            <Button
              logo={<span />}
              title="Giving"
              logoPosition="left"
              size="sm"
              type="primary"
            />
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
