import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { useDispatch } from "react-redux";

import { actionCreators as calendarActions } from "../redux/modules/calendar";
import { Input, RectangleBtn, CancleBtn } from "../elements";
import { flex } from "../mixins";
import ColorBtns from "./ColorBtns";

const AddForm = (props) => {
  const { history } = props;

  const dispatch = useDispatch();

  // ⭐반드시 리팩토링 하기
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [memo, setMemo] = useState("");
  const [location, setLocation] = useState("");
  const [color, setColor] = useState("brick");

  const handleSubmit = (e) => {
    if (!title.trim()) {
      alert("제목 혹은 날짜를 확인해주세요.");
      return;
    }

    const schedule = {
      title: title.trim(),
      date: parseInt(date.split("-").join("")),
      location: location.trim(),
      memo,
      color,
      query: parseInt(date.slice(0, 5)),
      isCompleted: false,
    };
    dispatch(calendarActions.addCalendarFB(schedule));
    history.replace("/");
  };

  return (
    <Form>
      <ColorBtns current={color} _onClick={(e) => setColor(e.target.id)} />
      <Input
        id="title"
        label="일정 제목*"
        type="text"
        _onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <Input
        id="location"
        label="장소"
        type="text"
        _onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      <Input
        id="date"
        label="날짜*"
        type="date"
        _onChange={(e) => setDate(e.target.value)}
        value={date}
      />
      <Input
        id="memo"
        label="메모"
        type="textarea"
        _onChange={(e) => setMemo(e.target.value)}
        value={memo}
      />
      <BtnBox>
        <CancleBtn to="/">취소</CancleBtn>
        <RectangleBtn type="button" onClick={handleSubmit}>
          일정 추가하기
        </RectangleBtn>
      </BtnBox>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  margin: 0 auto;
`;

const BtnBox = styled.div`
  ${flex.Flexbox};
  justify-content: flex-end;
  gap: 20px;
`;

export default AddForm;
