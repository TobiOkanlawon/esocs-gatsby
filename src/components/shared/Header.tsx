import React from "react";
import { LeftIconButton } from "./Button";
import HeaderLink from "./HeaderLink";
import "./header.css";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.header`
  grid-area: header;
  width: 100vw;
  position: absolute;
  background-color: transparent;
  z-index: 2;
`;

const StyledLogoText = styled.p`
  margin-left: 12px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ul>
          <StaticImage
            height={54}
            width={54}
            alt="logo"
            src="../../images/logo.png"
          />
          <StyledLogoText>
            The Eternal Sacred Order of The Cherubim & Seraphim
          </StyledLogoText>
        </ul>
        <ul>
          <li>
            <HeaderLink title="About us" href="/about" />
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
            <LeftIconButton
              title="Giving"
              size="sm"
              icon={<FontAwesomeIcon icon={faGift} />}
            />
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
