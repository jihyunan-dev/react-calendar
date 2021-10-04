// Modal : 스케줄 클릭 시 해당 스케줄에 대한 자세한 정보를 보여주는 모달 컴포넌트

import React from "react";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as modalActions } from "../redux/modules/modal";
import { actionCreators as calendarActions } from "../redux/modules/calendar";

import ModalHeader from "./ModalHeader";
import { Def } from "../elements";

const Modal = (props) => {
  const dispatch = useDispatch();

  const currentId = useSelector((state) => state.modal.currentId);
  const data = useSelector((state) =>
    state.calendar.scheduleList.find((schedule) => schedule.id === currentId)
  );

  const { title, memo, location, date, isCompleted, color, id } = data;

  // 날짜의 형태가 20210607과 같은 형태이므로 slice로 잘라서 사용
  const year = String(date).slice(0, 4);
  const month = String(date).slice(4, 6);
  const day = String(date).slice(6, 8);

  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };

  const toggleComplete = () => {
    dispatch(calendarActions.checkCalendarFB(id));
  };

  const deleteSchedule = () => {
    dispatch(calendarActions.deleteCalendarFB(id));
    dispatch(modalActions.closeModal());
  };

  return (
    <ModalContainer>
      <ModalHeader color={color} isCompleted={isCompleted} title={title} />
      <ModalBody>
        {location && <Def title="장소" description={location} />}
        <Def title="날짜" description={`${year}년 ${month}월 ${day}일`} />
        {memo && <Def title="메모" description={memo} />}
      </ModalBody>
      <BtnBox>
        <ModalBtn type="button" onClick={toggleComplete}>
          {isCompleted ? "미완료" : "완료"}
        </ModalBtn>
        <ModalBtn type="button" onClick={deleteSchedule}>
          삭제
        </ModalBtn>
        <ModalBtn color="white" type="button" onClick={closeModal}>
          닫기
        </ModalBtn>
      </BtnBox>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  max-width: 600px;
  max-height: 450px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 20;
`;

const ModalBody = styled.dl`
  height: 70%;
  padding: 20px;
`;

const BtnBox = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ModalBtn = styled.button`
  ${({ color, theme }) => {
    const { device, colors, fontSizes } = theme;
    return css`
      padding: 0 5px;
      font-size: ${fontSizes.md};
      font-weight: 600;
      color: ${color ? colors[color] : colors.black};

      ${device.tablet} {
        padding: 0 10px;
      }
    `;
  }}
`;

export default Modal;
