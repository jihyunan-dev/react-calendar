// flexbox.js : flex를 쉽게 사용하기 위해 만든 mixin. import해서 사용.

import { css } from "styled-components";

const Flexbox = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexboxColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export { Flexbox, FlexboxColumn };
