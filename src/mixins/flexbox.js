import { css } from "styled-components";

const Flexbox = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexBoxColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const flex = {
  Flexbox,
  FlexBoxColumn,
};
