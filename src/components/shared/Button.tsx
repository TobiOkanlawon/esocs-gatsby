import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  type: "primary" | "secondary";
  logo?: React.ReactNode | Element;
  logoPosition: "left" | "right";
  size: "sm" | "md" | "lg";
};

type StyledButtonProps = {
  // type: Props["type"];
  $size: Props["size"];
};

const StyledButton = styled.button<StyledButtonProps>`
  background-color: #0092e7;
  ${(props) =>
    props.$size == "lg" ? "padding: 18px 48px;" : "padding: 18px 24px;"}
  ${(props) => props.$size == "md" && "width: 240px"};
  ${(props) => props.$size == "sm" && "width: 120px"};
  color: white;
  border: 0px;
  font-size: 18px;
  border-radius: 36px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 500px;
`;

const Button: React.FC<Props> = ({ title, type, size }) => {
  return <StyledButton $size={size}>{title}</StyledButton>;
};

export default Button;
