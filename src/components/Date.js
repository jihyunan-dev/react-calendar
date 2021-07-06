import React from "react";
import { Schedule } from "../elements";

const Date = (props) => {
  const { list, children } = props;

  return (
    <div>
      <span>{children}</span>
      {list.map((item) => (
        <Schedule key={item.id}>{item.title}</Schedule>
      ))}
    </div>
  );
};

export default Date;
