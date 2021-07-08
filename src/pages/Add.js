import React from "react";
import styled from "styled-components";

import { flex } from "../mixins";
import AddForm from "../components/AddForm";

const Add = (props) => {
  return (
    <Container>
      <AddForm history={props.history} />
    </Container>
  );
};

const Container = styled.section`
  ${flex.FlexBoxColumn};
  max-width: 500px;
  margin: 50px auto;
  padding: 0 30px;
`;

export default Add;
