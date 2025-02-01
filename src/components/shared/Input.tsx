import React from "react";
import styled from "styled-components";
import { inputGray } from "../../constants/colors";

type FieldType = "textarea" | "short" | "long";

// text area for textarea, and input for short or long
type Props =
  | ({
      fieldType: "textarea";
    } & React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >)
  | ({
      fieldType: "short" | "long";
    } & React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >);

type InputLineProps = {
  number: number;
  children: React.ReactNode;
};

const StyledInput = styled.input<{ $fieldType: FieldType }>`
  background-color: white;
  padding: 24px 32px;
  width: 100%;
  margin-bottom: 24px;
  color: ${inputGray};
  border: none;
  box-sizing: border-box;
  border-radius: 30px;
`;

const StyledTextAreaContainer = styled.textarea`
  background-color: white;
  padding: 24px 32px;
  width: 100%;
  margin-bottom: 24px;
  color: ${inputGray};
  border: none;
  box-sizing: border-box;
  border-radius: 30px;
`;

const StyledLine = styled.div<{ $number: number }>`
  display: flex;
  gap: 48px;
  justify-content: space-between;
`;

const Input: React.FC<Props> = ({ fieldType, ...rest }) => {
  if (fieldType === "textarea") {
    const textareaProps =
      rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    return <StyledTextAreaContainer {...textareaProps} />;
  }

  const inputProps = rest as React.InputHTMLAttributes<HTMLInputElement>;
  return <StyledInput $fieldType={fieldType} {...inputProps} />;
};

export const InputLine: React.FC<InputLineProps> = ({ number, children }) => {
  return <StyledLine $number={number}>{children}</StyledLine>;
};

export default Input;
