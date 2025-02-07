import React from "react";
import { StyledSectionContainer } from "../../constants/css";
import CenterAlignedContainer from "../shared/CenterAlignedContainer";
import styled from "styled-components";
import Input, { InputLine } from "../shared/Input";
import { RightIconButton as Button } from "../shared/Button";

const StyledFormContainer = styled.div``;

const ReachOutToUs = () => {
  return (
    <StyledSectionContainer color="#F5F5F5">
      <CenterAlignedContainer
        title="Reach Out to Us!"
        subTitle="Share Your Testimonies, Send Inquiries, or Submit Prayer Requests"
      />
      <StyledFormContainer>
        <InputLine number={2}>
          <Input
            type="text"
            fieldType="short"
            placeholder="Enter your full name here"
            required
          />
          <Input
            type="email"
            fieldType="short"
            placeholder="Enter your email address"
            required
          />
        </InputLine>
        <Input
          fieldType="long"
          type="text"
          placeholder="Input the purpose of your message here"
          required
        />
        <Input
          fieldType="textarea"
          placeholder="Type the details of your message here"
          value=""
          required
        />
      </StyledFormContainer>
      <Button title="Send Message" size="md" />
    </StyledSectionContainer>
  );
};

export default ReachOutToUs;
