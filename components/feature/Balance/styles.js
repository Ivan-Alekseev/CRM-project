import styled from "styled-components";
import { IconCross } from './../../shared/Icons';

export const StyledBalance = styled.div`
  width: 145px;
  height:40px;
  background-color:#FFFFFF;
  border-radius: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color:#899CB1;
  padding:8px 12px;
  box-sizing: border-box;
`;

export const StyledBalanceValue = styled.div`
  font-weight: 400;
  font-size: 14px;
  color:#122945;
`;
export const StyledIconCross = styled(IconCross)`
  width: 24px;
  height:24px;
  color:#005FF8;
  fill:#005FF8;
`;