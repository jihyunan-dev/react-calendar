import React, { useState } from "react";
import moment from "moment";
import CalendarBody from "../components/CalendarBody";
import CalendarHeader from "../components/CalendarHeader";

const Calendar = (props) => {
  const [date, setDate] = useState(moment());
  const current = date;

  return (
    <>
      <CalendarHeader current={current} setDate={setDate} />
      <CalendarBody current={current} />
    </>
  );
};

export default Calendar;
