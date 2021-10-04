// Date : 날짜 한 칸 한 칸을 의미

import React, { memo } from "react";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";

import { Schedule } from "../elements";
import { actionCreators as modalActions } from "../redux/modules/modal";

const Date = memo((props) => {
  const { list, today, thisMonth, children } = props; // list는 해당 date의 scheduleList을 의미
  const dispatch = useDispatch();

  const showModal = (id) => {
    dispatch(modalActions.showModal(id));
  };

  return (
    <DateBox today={today}>
      <DateNum today={today} thisMonth={thisMonth}>
        {children}
      </DateNum>
      {list.map((item) => {
        return (
          <Schedule
            key={item.id}
            isCompleted={item.isCompleted}
            color={item.color}
            _onClick={() => showModal(item.id)} // 클릭 시 해당 스케줄 정보가 담긴 모달이 보여짐
          >
            {item.title}
          </Schedule>
        );
      })}
    </DateBox>
  );
});

const DateBox = styled.div`
  ${({ theme, today }) => {
    const { colors } = theme;
    return css`
      padding: 7px;
      background-color: ${today === true ? colors.white : colors.black};
    `;
  }}
`;

const DateNum = styled.p`
  ${({ theme, today, thisMonth }) => {
    const { colors, fontSizes } = theme;
    return css`
      width: 100%;
      padding-bottom: 5px;
      font-size: ${fontSizes.sm};
      font-weight: 600;
      color: ${today === true ? colors.black : colors.white};
      opacity: ${thisMonth ? "100%" : "50%"};
    `;
  }}
`;

export default Date;
