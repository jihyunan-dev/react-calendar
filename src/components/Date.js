import React from "react";
import { useDispatch } from "react-redux";
import { Schedule } from "../elements";
import { actionCreators as modalActions } from "../redux/modules/modal";

const Date = (props) => {
  const { list, children } = props;
  const dispatch = useDispatch();

  const showModal = (id) => {
    dispatch(modalActions.showModal(id));
  };

  return (
    <div>
      <span>{children}</span>
      {list.map((item) => {
        return (
          <Schedule
            key={item.id}
            isCompleted={item.isCompleted}
            _onClick={() => showModal(item.id)}
          >
            {item.title}
          </Schedule>
        );
      })}
    </div>
  );
};

export default Date;
