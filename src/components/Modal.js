import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as modalActions } from "../redux/modules/modal";
import { actionCreators as calendarActions } from "../redux/modules/calendar";

const Modal = (props) => {
  const dispatch = useDispatch();

  const currentId = useSelector((state) => state.modal.currentId);
  const data = useSelector((state) =>
    state.calendar.scheduleList.find((schedule) => schedule.id === currentId)
  );

  const { title, memo, location, date, isCompleted, isImportant, id } = data;

  const year = String(date).slice(0, 4);
  const month = String(date).slice(4, 6);
  const day = String(date).slice(6, 8);

  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };

  const toggleComplete = () => {
    dispatch(calendarActions.checkCalendarFB(id));
  };

  return (
    <ModalContainer>
      <div>
        <strong>{isImportant ? "중요" : null}</strong>
        <span>{isCompleted ? "완료" : "미완료"}</span>
      </div>
      <dl>
        <div>
          <dt>일정 제목</dt>
          <dd>{title}</dd>
        </div>
        <div>
          <dt>장소</dt>
          <dd>{location}</dd>
        </div>
        <div>
          <dt>날짜</dt>
          <dd>{`${year}년 ${month}월 ${day}일`}</dd>
        </div>
        <div>
          <dt>메모</dt>
          <dd>{memo}</dd>
        </div>
      </dl>
      <button type="button" onClick={toggleComplete}>
        {isCompleted ? "미완료" : "완료"}
      </button>
      <button type="button" onClick={closeModal}>
        닫기
      </button>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  height: 50vh;
  background-color: orange;
`;

export default Modal;
