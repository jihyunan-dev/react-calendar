// posCenter : 가로와 세로 모두 center로 배치하기 위한 mixin.

import { css } from "styled-components";

const PosCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { PosCenter };
