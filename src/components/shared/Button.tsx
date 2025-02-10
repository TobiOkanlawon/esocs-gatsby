import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  type?: "primary" | "secondary";
  icon?: React.ReactNode;
  logoPosition?: "left" | "right";
  size: "sm" | "md" | "lg";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type StyledButtonProps = {
  // type: Props["type"];
  $size: Props["size"];
};

const StyledButton = styled.button<StyledButtonProps>`
  background-color: #0092e7;
  ${(props) =>
    props.$size == "lg" ? "padding: 18px 48px;" : "padding: 18px 24px;"}
  width: auto;
  ${(props) => props.$size == "sm" && "min-width: 120px"};
  ${(props) => props.$size == "sm" && "max-width: 240px"};
  ${(props) => props.$size == "md" && "min-width: 240px"};
  ${(props) => props.$size == "md" && "max-width: 320px"};
  ${(props) => props.$size == "lg" && "max-width: 480px"};
  color: white;
  border: 0px;
  font-size: 18px;
  border-radius: 36px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 500px;
  text-transform: uppercase;
`;

const StyledText = styled.span`
  display: inline-block;
  margin: 0px 10px;
`;

const Button: React.FC<Props> = ({
  title,
  type = "primary",
  icon,
  logoPosition,
  size,
  ...rest
}) => {
  return (
    <StyledButton $size={size} {...rest}>
      {logoPosition === "left" && icon}
      <StyledText>{title}</StyledText>
      {logoPosition === "right" && icon}
    </StyledButton>
  );
};

export const RightIconButton: React.FC<Props> = ({children, icon, ...rest}) => {
  return (
    <Button {...rest}
      logoPosition="right"
      icon={icon || <FontAwesomeIcon icon={faArrowRight} />}
    >
      {children}
    </Button>
  );
};

export const LeftIconButton: React.FC<Props> = ({children, ...rest}) => {
  return (
    <Button {...rest} logoPosition="left">
      {children}
    </Button>
  );
};

export default Button;
