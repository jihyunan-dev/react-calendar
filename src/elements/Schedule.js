import React from "react";

const Schedule = (props) => {
  const { _onClick, children } = props;

  return (
    <button type="button" onClick={_onClick}>
      {children}
    </button>
  );
};

export default Schedule;
