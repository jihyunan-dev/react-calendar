import React from "react";

const Schedule = (props) => {
  const { isCompleted, _onClick, children } = props;

  return (
    <button type="button" onClick={_onClick}>
      {isCompleted ? `(완)${children}` : `(미완)${children}`}
    </button>
  );
};

export default Schedule;
