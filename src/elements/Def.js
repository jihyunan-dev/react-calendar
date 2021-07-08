import React, { memo } from "react";
import styled, { css } from "styled-components";
import { flex } from "../mixins";

const Def = memo((props) => {
  const { title, description } = props;
  return (
    <DefBox>
      <DefTitle>{title}</DefTitle>
      <DefDesc>{description}</DefDesc>
    </DefBox>
  );
});

Def.defaultProps = {
  title: "",
  description: "",
};

const DefBox = styled.div`
  ${flex.FlexBoxColumn};
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const DefTitle = styled.dt`
  ${({ theme }) => {
    const { device, fontSizes } = theme;
    return css`
      margin-bottom: 10px;
      font-size: ${fontSizes.md};
      font-weight: 600;

      ${device.tablet} {
        font-size: ${fontSizes.lg};
      }
    `;
  }}
`;

const DefDesc = styled.dd`
  ${({ theme }) => {
    const { device, fontSizes } = theme;
    return css`
      font-size: ${fontSizes.sm};

      ${device.tablet} {
        font-size: ${fontSizes.md};
      }
    `;
  }}
`;

export default Def;
