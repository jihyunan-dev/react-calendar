import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import CalendarBody from "../components/CalendarBody";
import CalendarHeader from "../components/CalendarHeader";
import Modal from "../components/Modal";

const Calendar = (props) => {
  const isShow = useSelector((state) => state.modal.modalVisibility);

  const moveToAdd = () => props.history.push("/add");

  return (
    <Container>
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
