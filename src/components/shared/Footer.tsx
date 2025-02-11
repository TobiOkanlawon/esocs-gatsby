import React from "react";
import {
  StyledFooter,
  StyledFooterColumnHeader,
  StyledFooterLink,
  StyledFooterLogoColumn,
} from "./Footer.styles";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       file(relativePath: { eq: "logo.png" }) {
  //         logoSharp {
  //           fixed(width: 68, height: 68) {
  //             ...GatsbyImageSharpFixed
  //           }
  //         }
  //       }
  //     }
  //   `
  // );

  return (
    <StyledFooter>
      <StyledFooterLogoColumn>
        <StaticImage
          height={54}
          width={54}
          alt="logo"
          src="../../images/logo.png"
        />
      </StyledFooterLogoColumn>
      <div className="footer-columns">
        <ul>
          <StyledFooterColumnHeader>Contact Us</StyledFooterColumnHeader>
          <StyledFooterLink>Address</StyledFooterLink>
          <StyledFooterLink>+234 80 8256 3457</StyledFooterLink>
          <StyledFooterLink>+234 80 8256 3457</StyledFooterLink>
        </ul>
      </div>
      <div className="footer-columns">
        <ul>
          <StyledFooterColumnHeader>Quick links</StyledFooterColumnHeader>
          <StyledFooterLink to="/about">About</StyledFooterLink>
          <StyledFooterLink>News</StyledFooterLink>
          <StyledFooterLink>Giving</StyledFooterLink>
        </ul>
      </div>
      <div className="footer-columns">
        <ul>
          <StyledFooterColumnHeader>Follow and Share</StyledFooterColumnHeader>
          <StyledFooterLink></StyledFooterLink>
          <StyledFooterLink></StyledFooterLink>
          <StyledFooterLink></StyledFooterLink>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
