import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { flex } from "../mixins";
import Date from "./Date";

import { actionCreators as calendarActions } from "../redux/modules/calendar";

import { ModeBtn } from "../elements";

const CalendarBody = (props) => {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.calendar.mode);
  const { now, current } = useSelector((state) => state.date);
  const nowFormat = now.clone().format("YYYYMMDD");
  const schedules = useSelector((state) => state.calendar.scheduleList) || [];

  const firstDay = current.clone().startOf("month");
  const startDate = firstDay.clone().subtract("day", firstDay.day());

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const clickButton = () => {
    dispatch(calendarActions.toggleMode());
  };

  const renderDate = () => {
    return (
      <>
        {[...Array(42)].map((n, idx) => {
          let target = startDate.clone().add(idx, "d");
          let today = target.clone().format("YYYYMMDD") === nowFormat;
          let targetList =
            mode === "all"
              ? schedules.filter(
                  (schedule) =>
                    schedule.date === parseInt(target.format("YYYYMMDD"))
                )
              : schedules.filter(
                  (schedule) =>
                    schedule.date === parseInt(target.format("YYYYMMDD")) &&
                    schedule.isCompleted === true
                );
          return (
            <Date key={idx} list={targetList} today={today}>
              {target.format("D")}
            </Date>
          );
        })}
      </>
    );
  };

  return (
    <Container>
      <CalendarDays>
        {days.map((day, idx) => (
          <DayBox key={idx}>{day}</DayBox>
        ))}
      </CalendarDays>
      <CalendarDate>{renderDate()}</CalendarDate>

      <ModeBtn type="button" onClick={clickButton}>
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
      ${flex.Flexbox}
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
  grid-template-rows: repeat(6, minmax(70px, 100px));
`;

export default CalendarBody;
