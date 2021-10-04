import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// components & elements
import CalendarBody from "../components/CalendarBody";
import CalendarHeader from "../components/CalendarHeader";
import Modal from "../components/Modal";
import { Overlay } from "../elements";

const Calendar = (props) => {
  // modal이 보이는 여부를 redux에서 관리
  const isShow = useSelector((state) => state.modal.modalVisibility);
  const moveToAdd = () => props.history.push("/add");

  return (
    <Container>
      {isShow && <Overlay />}
      <CalendarHeader toAdd={moveToAdd} />
      <CalendarBody />
      {isShow && <Modal />}
    </Container>
  );
};

const Container = styled.section`
  position: fixed;
  top: 50%;
  width: 100%;
  max-height: 100vh;
  transform: translate(0, -50%);
`;

export default Calendar;
