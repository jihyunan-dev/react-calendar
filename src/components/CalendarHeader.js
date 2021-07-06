import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { actionCreators as dateActions } from "../redux/modules/date";

const CalendarHeader = (props) => {
  const current = useSelector((state) => state.date.current);
  const dispatch = useDispatch();

  const showLastMonth = () =>
    dispatch(dateActions.setCurrent(current.clone().subtract(1, "month")));
  const showNextMonth = () =>
    dispatch(dateActions.setCurrent(current.clone().add(1, "month")));

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
