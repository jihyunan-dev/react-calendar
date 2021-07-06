import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CalendarBody from "../components/CalendarBody";
import CalendarHeader from "../components/CalendarHeader";
import Modal from "../components/Modal";

const Calendar = (props) => {
  const isShow = useSelector((state) => state.modal.modalVisibility);
  console.log(isShow);

  return (
    <>
      <CalendarHeader />
      <CalendarBody />
      {isShow && <Modal />}
      <Link to="/add">추가하기</Link>
    </>
  );
};

export default Calendar;
