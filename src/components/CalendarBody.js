// CalendarBody : 캘린더의 날짜부분

import React from "react";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

// components & elements
import useRenderDate from "../hooks/useRenderDate";
import { ModeBtn } from "../elements";

// style
import { Flexbox } from "../mixins";

// redux
import { actionCreators as calendarActions } from "../redux/modules/calendar";

const CalendarBody = (props) => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.calendar.mode); // 완료 일정 보기(completed) / 모든 일정 보기(all)를 의미

  const { now, current } = useSelector((state) => state.date);

  const firstDay = current.clone().startOf("month");
  const startDate = firstDay.clone().subtract("day", firstDay.day());

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dates = useRenderDate(startDate, now, current);

  // 모드 변경
  const toggleMode = () => {
    dispatch(calendarActions.toggleMode());
  };

  return (
    <Container>
      <CalendarDays>
        {days.map((day, idx) => (
          // 요일 렌더
          <DayBox key={idx}>{day}</DayBox>
        ))}
      </CalendarDays>
      <CalendarDate>{dates}</CalendarDate>

      <ModeBtn type="button" onClick={toggleMode}>
        {mode === "all" ? "완료 일정 보기" : "모든 일정 보기"}
      </ModeBtn>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const CalendarGrid = css`
  ${({ theme }) => {
    const { borders } = theme;
    return css`
      display: grid;
      grid-template-columns: repeat(7, calc(100% / 7));

      & > div {
        border-right: ${borders.basicBorder};
        border-bottom: ${borders.basicBorder};
      }

      &:nth-child(n) {
        border-left: ${borders.basicBorder};
      }
    `;
  }}
`;

const CalendarDays = styled.div`
  ${CalendarGrid};
  grid-template-rows: 30px;
  height: 30px;
`;

const DayBox = styled.div`
  ${({ theme }) => {
    const { device, fontSizes } = theme;
    return css`
      ${Flexbox}
      height: 30px;

      font-size: ${fontSizes.sm};
      font-weight: 600;

      ${device.tablet} {
        font-size: ${fontSizes.md};
      }
    `;
  }}
`;

const CalendarDate = styled.div`
  ${CalendarGrid};
  grid-template-rows: repeat(6, calc((100vh - 90px) / 6));

  ${({ theme }) => theme.device.tablet} {
    grid-template-rows: repeat(6, calc((100vh - 100px) / 6));
  }
`;

export default CalendarBody;
