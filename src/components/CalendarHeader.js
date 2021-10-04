// CalendarHeader : 캘린더의 헤더부분. 현재 보이는 월, 좌우 월 이동, 일정 추가 버튼

import React, { memo } from "react";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

import { actionCreators as dateActions } from "../redux/modules/date";
import { Flexbox, PosCenter } from "../mixins";

const CalendarHeader = memo((props) => {
  const dispatch = useDispatch();

  const current = useSelector((state) => state.date.current);

  // 지난 달로 이동
  const showLastMonth = () =>
    dispatch(dateActions.setCurrent(current.clone().subtract(1, "month")));

  // 다음 달로 이동
  const showNextMonth = () =>
    dispatch(dateActions.setCurrent(current.clone().add(1, "month")));

  return (
    <Header>
      <Nav>
        <HeaderBtn onClick={showLastMonth}>
          <BsChevronLeft />
        </HeaderBtn>

        <CurrentDate>{current.format("YYYY년 MM월")}</CurrentDate>

        <HeaderBtn onClick={showNextMonth}>
          <BsChevronRight />
        </HeaderBtn>
      </Nav>

      <HeaderBtn onClick={props.toAdd}>
        <FaPlus />
        <BtnText>일정 추가하기</BtnText>
      </HeaderBtn>
    </Header>
  );
});

const Header = styled.div`
  ${({ theme }) => {
    const { device, colors } = theme;
    return css`
      ${Flexbox}
      position: relative;
      justify-content: flex-end;
      height: 50px;
      border-bottom:2px solid ${colors.basicBorder};

      ${device.tablet} {
        height: 60px;
        padding: 0 20px;

      }
    }`;
  }}
`;

const Nav = styled.div`
  ${Flexbox};
  ${PosCenter};
  height: 100%;
`;

const HeaderStyle = css`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
`;

const CurrentDate = styled.h2`
  ${Flexbox};
  ${HeaderStyle}
  width: 140px;
`;

const HeaderBtn = styled.button`
  ${Flexbox}
  ${HeaderStyle}
  height: 100%;
  padding: 0 5px;
  margin: 0 10px;

  ${({ theme }) => theme.device.tablet} {
    padding: 0 15px;
    margin: 0 10px;
  }
`;

const BtnText = styled.span`
  display: none;

  ${({ theme }) => theme.device.tablet} {
    display: block;
    margin-left: 5px;
    margin-bottom: 3px;
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export default CalendarHeader;
