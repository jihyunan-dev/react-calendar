import React from "react";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { actionCreators as dateActions } from "../redux/modules/date";
import { Flexbox } from "../mixins/flexbox";

const CalendarHeader = (props) => {
  const current = useSelector((state) => state.date.current);
  const dispatch = useDispatch();

  const showLastMonth = () =>
    dispatch(dateActions.setCurrent(current.clone().subtract(1, "month")));
  const showNextMonth = () =>
    dispatch(dateActions.setCurrent(current.clone().add(1, "month")));

  return (
    <Header>
      <ChevronBtn onClick={showLastMonth}>
        <BsChevronLeft />
      </ChevronBtn>

      <CurrentDate>{current.format("YYYY년 MM월")}</CurrentDate>

      <ChevronBtn onClick={showNextMonth}>
        <BsChevronRight />
      </ChevronBtn>
    </Header>
  );
};

const Header = styled.div`
  ${({ theme }) => {
    const { device, colors } = theme;
    return css`
      ${Flexbox}
      height: 50px;
      border-bottom:2px solid ${colors.basicBorder};

      ${device.tablet} {
        height: 60px;
      }
    }`;
  }}
`;

const HeaderStyle = css`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
`;

const CurrentDate = styled.h2`
  ${HeaderStyle}
  width: 120px;
`;

const ChevronBtn = styled.button`
  ${HeaderStyle}
  height: 100%;
  padding: 0 25px;
  margin: 0 10px;
`;

export default CalendarHeader;
