import React from "react";
import styled from "styled-components";

const Schedule = (props) => {
  const { isCompleted, color, _onClick, children } = props;

  return (
    <ScheduleBtn type="button" color={color} onClick={_onClick}>
      {isCompleted ? `(완)${children}` : `(미완)${children}`}
    </ScheduleBtn>
  );
};

const ScheduleBtn = styled.button`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 3px 2px 3px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, color }) => theme.colors[color]};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
`;

export default Schedule;
