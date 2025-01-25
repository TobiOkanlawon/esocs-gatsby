import React from "react";
import {
  StyledFooter,
  StyledFooterColumnHeader,
  StyledFooterLink,
} from "./Footer.styles";

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
      <div className="footer-columns"></div>
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
          <StyledFooterLink>About</StyledFooterLink>
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
