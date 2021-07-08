import React from "react";
import styled from "styled-components";
import { Flexbox } from "../mixins";
import theme from "../shared/theme";

const ColorBtns = (props) => {
  const { current, _onClick } = props;

  const { label: colors } = theme;
  const labels = Object.entries(colors);
  return (
    <Container>
      {labels.map((label, idx) => (
        <LabelBtn
          type="button"
          key={label[0]}
          id={label[0]}
          color={label[1]}
          current={current === label[0]}
          onClick={_onClick}
        ></LabelBtn>
      ))}
    </Container>
  );
};

const Container = styled.div`
  ${Flexbox}
  justify-content: flex-start;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const LabelBtn = styled.button`
  width: 20px;
  height: 20px;
  border: 3px solid
    ${({ theme, current }) => (current ? theme.colors.white : "transparent")};
  border-radius: 50%;
  background-color: ${({ color }) => color};

  ${({ theme }) => theme.device.tablet} {
    width: 25px;
    height: 25px;
  }
`;

export default ColorBtns;
