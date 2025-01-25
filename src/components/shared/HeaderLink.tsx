import { Link } from "gatsby";
import React from "react";
import "./headerLink.css";

type Props = {
  href: string;
  title: string;
};

const HeaderLink: React.FC<Props> = ({ href, title }) => {
  return <Link to={href}>{title}</Link>;
};

export default HeaderLink;
