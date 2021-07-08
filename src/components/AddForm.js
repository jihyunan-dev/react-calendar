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

  const [value, setValue] = useState({
    color: "brick",
    title: "",
    date: moment().format("YYYY-MM-DD"),
    location: "",
    memo: "",
  });

  const { color, title, date, location, memo } = value;

  const handleSubmit = (e) => {
    if (!title.trim()) {
      alert("제목 혹은 날짜를 확인해주세요.");
      return;
    }

    const schedule = {
      ...value,
      date: parseInt(date.split("-").join("")),
      query: parseInt(date.slice(0, 5)),
      isCompleted: false,
    };

    dispatch(calendarActions.addCalendarFB(schedule));
    history.replace("/");
  };

  return (
    <Form>
      <ColorBtns
        current={color}
        _onClick={(e) => setValue({ ...value, color: e.target.id })}
      />
      <Input
        id="title"
        label="일정 제목*"
        type="text"
        _onChange={(e) => setValue({ ...value, title: e.target.value })}
        value={title}
      />

      <Input
        id="location"
        label="장소"
        type="text"
        _onChange={(e) => setValue({ ...value, location: e.target.value })}
        value={location}
      />
      <Input
        id="date"
        label="날짜*"
        type="date"
        _onChange={(e) => setValue({ ...value, date: e.target.value })}
        value={date}
      />
      <Input
        id="memo"
        label="메모"
        type="textarea"
        _onChange={(e) => setValue({ ...value, memo: e.target.value })}
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
