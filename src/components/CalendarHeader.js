import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const CalendarHeader = (props) => {
  const { current, setDate } = props;

  const showLastMonth = () => setDate(current.clone().subtract(1, "month"));
  const showNextMonth = () => setDate(current.clone().add(1, "month"));

  return (
    <div>
      <button onClick={showLastMonth}>
        <BsChevronLeft />
      </button>

      <h2>{current.format("YYYY년 MM월")}</h2>

      <button onClick={showNextMonth}>
        <BsChevronRight />
      </button>
    </div>
  );
};

export default CalendarHeader;
