import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elements";

const Date = (props) => {
  const { children } = props;
  return (
    <div>
      <span>{children}</span>
    </div>
  );
};

export default Date;
