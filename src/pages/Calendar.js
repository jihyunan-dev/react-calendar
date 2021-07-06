import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CalendarBody from "../components/CalendarBody";
import CalendarHeader from "../components/CalendarHeader";
import Modal from "../components/Modal";
import { actionCreators as calendarActions } from "../redux/modules/calendar";

const Calendar = (props) => {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.modal.modalVisibility);

  const clickButton = () => {
    dispatch(calendarActions.toggleMode());
  };

  return (
    <>
      <CalendarHeader />
      <CalendarBody />
      {isShow && <Modal />}
      <button type="button" onClick={clickButton}>
        완료된 일정 보기
      </button>
      <Link to="/add">추가하기</Link>
    </>
  );
};

export default Calendar;
