import styled from "styled-components";
import { defaultTheme } from "../../../theme/default";
import { IconCalendar } from "../../shared/Icons";

export const StyledDatePicker = styled.div`
  width:114px;
  height:24px;
  display:flex;
  align-items: center;
  justify-content:space-between;

`;

export const TimeInterval = styled.div`
  width:64px;
  display:flex;
  align-items: center;
  justify-content:space-between;
  &:hover {
    cursor: pointer;
  }

  &:hover ${IconCalendar} path{
    fill:${defaultTheme.colorIconHover};
  }
`;

export const Text = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color:${defaultTheme.colorTextHover};
`;