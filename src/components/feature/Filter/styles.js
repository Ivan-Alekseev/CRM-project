import styled from "styled-components";
import { defaultTheme } from "../../../theme/default";

export const Content = styled.div`
  display:flex;
  align-items:center;

  cursor:pointer;
`;

export const Text = styled.span`
  color: ${defaultTheme.colorFilterDefault};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;