// Schedule : 캘린더의 스케줄 버튼 하나

import React, { memo } from "react";
import styled from "styled-components";

const Schedule = memo((props) => {
  const { isCompleted, color, _onClick, children } = props;

  return (
    <ScheduleBtn type="button" color={color} onClick={_onClick}>
      {isCompleted ? `(완)${children}` : `(미완)${children}`}
    </ScheduleBtn>
  );
});

const ScheduleBtn = styled.button`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 3px 2px 3px;
  margin-bottom: 3px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, color }) => theme.label[color]};
  font-size: ${({ theme }) => theme.fontSizes.xm};
  white-space: nowrap;
  overflow: hidden;
`;

export default Schedule;
