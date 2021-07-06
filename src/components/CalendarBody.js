import React from "react";
import styled, { css } from "styled-components";
import { Flexbox } from "../mixins/flexbox";
import Date from "./Date";

const CalendarBody = (props) => {
  const { current } = props;

  const firstDay = current.clone().startOf("month");
  const startDate = firstDay.clone().subtract("day", firstDay.day());

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const renderDate = () => {
    return (
      <>
        {[...Array(42)].map((n, idx) => {
          let target = startDate.clone().add(idx, "d");
          return <Date key={idx}>{target.format("D")}</Date>;
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
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const CalendarDays = styled.div`
  ${CalendarGrid};
  grid-template-rows: 30px;
`;

const DayBox = styled.div`
  ${Flexbox}
  font-size: 14px;
`;

const CalendarDate = styled.div`
  ${CalendarGrid};
  grid-template-rows: repeat(6, minmax(70px, 100px));
`;

export default CalendarBody;
