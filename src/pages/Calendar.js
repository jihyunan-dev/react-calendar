import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CalendarBody from "../components/CalendarBody";
import CalendarHeader from "../components/CalendarHeader";
import Modal from "../components/Modal";
import { Overlay } from "../elements";

const Calendar = (props) => {
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
  position: relative;
`;

export default Calendar;
