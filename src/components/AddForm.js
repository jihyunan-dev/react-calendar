// AddForm : 스케줄 추가하는 form 컴포넌트

import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import moment from "moment";

import { actionCreators as calendarActions } from "../redux/modules/calendar";
import { Input, RectangleBtn, CancleBtn } from "../elements";
import ColorBtns from "./ColorBtns";

import { Flexbox } from "../mixins";

const AddForm = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    color: "brick", // 기본 색상
    title: "",
    date: moment().format("YYYY-MM-DD"), // 오늘 날짜로 기본 설정(변경 가능)
    location: "",
    memo: "",
  });

  const { color, title, date, location, memo } = value;

  // 폼 제출 함수
  const handleSubmit = (e) => {
    // title이 빈 경우 제출 불가
    if (!title.trim()) {
      alert("제목 혹은 날짜를 확인해주세요.");
      return;
    }

    // firebase에 저장하기 위한 데이터 객체
    const schedule = {
      ...value,
      memo,
      date: parseInt(date.split("-").join("")), // 형태를 변경하여 저장
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
  ${Flexbox};
  justify-content: flex-end;
  gap: 20px;
`;

export default AddForm;
