import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "../elements";
import moment from "moment";
import { actionCreators as calendarActions } from "../redux/modules/calendar";

const Add = (props) => {
  const { history } = props;

  const dispatch = useDispatch();

  const [isImportant, setIsImportant] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [memo, setMemo] = useState("");
  const [location, setLocation] = useState("");
  // color는 나중에 버튼으로 추가 예정
  const [color, setColor] = useState("red");

  const handleSubmit = (e) => {
    const schedule = {
      isImportant,
      title,
      date: parseInt(date.split("-").join("")),
      location,
      memo,
      color,
      query: parseInt(date.slice(0, 5)),
      isCompleted: false,
    };
    dispatch(calendarActions.addCalendarFB(schedule));
    history.push("/");
  };

  return (
    <>
      <form>
        <Input
          id="is-important"
          label="중요"
          type="checkbox"
          _onChange={(e) => setIsImportant(e.target.checked)}
        />
        <Input
          id="title"
          label="일정 제목"
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
          label="날짜"
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
        <button type="button" onClick={handleSubmit}>
          일정 추가하기
        </button>
      </form>
    </>
  );
};

export default Add;
