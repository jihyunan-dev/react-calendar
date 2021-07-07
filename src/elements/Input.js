import React from "react";
import styled from "styled-components";
import { flex } from "../mixins";

const Input = (props) => {
  const { type, label, id, placeholder, value, _onChange } = props;

  if (type === "textarea") {
    return (
      <InputBox>
        <CustomLabel htmlFor={id}>{label}</CustomLabel>
        <CustomTextarea
          id={id}
          onChange={_onChange}
          value={value}
        ></CustomTextarea>
      </InputBox>
    );
  }

  return (
    <InputBox>
      <CustomLabel htmlFor={id}>{label}</CustomLabel>
      <CustomInput
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={_onChange}
        value={value}
      />
    </InputBox>
  );
};

Input.defaultProps = {
  id: Date.now(),
  label: "",
  placeholder: "",
  value: "",
};

const InputBox = styled.div`
  ${flex.FlexBoxColumn}
  margin-bottom: 30px;

  &:focus {
    label {
      color: red;
    }
  }
`;

const CustomLabel = styled.label`
  display: inline-block;
  width: 100px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
`;

const CustomInput = styled.input`
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
`;

const CustomTextarea = styled.textarea`
  border: 2px solid ${({ theme }) => theme.colors.white};
  min-height: 100px;
`;

export default Input;
