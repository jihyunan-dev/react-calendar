import React from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { Flexbox } from "../mixins/flexbox";
import Date from "./Date";

const CalendarBody = (props) => {
  const mode = useSelector((state) => state.calendar.mode);
  const { now, current } = useSelector((state) => state.date);
  const nowFormat = now.clone().format("YYYYMMDD");
  const schedules = useSelector((state) => state.calendar.scheduleList) || [];

  const firstDay = current.clone().startOf("month");
  const startDate = firstDay.clone().subtract("day", firstDay.day());

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

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
    <div>
      <CalendarDays>
        {days.map((day, idx) => (
          <DayBox key={idx}>{day}</DayBox>
        ))}
      </CalendarDays>
      <CalendarDate>{renderDate()}</CalendarDate>
    </div>
  );
};

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
    const { device, colors, borders, fontSizes } = theme;
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
  grid-template-rows: repeat(6, minmax(70px, 100px));
`;

export default CalendarBody;
