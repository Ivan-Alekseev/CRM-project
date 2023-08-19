import styled from "styled-components";
import { defaultTheme } from "../../../../theme/default";
import Ul from "../../../../styled/ul/ul";
import Li from "../../../../styled/li/li";
import { IconLogout } from "../../../shared/Icons";

export const StyledDepartment = styled(Ul)`
  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 32px;
  }
`;

export const Title = styled.div`
  padding-left: 32px;
  padding-bottom: 16px;
  color: ${defaultTheme.colorTextDefault};
  font-size: 15px;
  font-weight: 400;
  line-height: 124%; /* 18.6px */
`;

export const Employee = styled(Li)`
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: ${defaultTheme.colorListItemHover};
  }
`;

export const StyledIconLogout = styled(IconLogout)`
  position: absolute;
  right: 30px;
`;

export const Link = styled.a`
  width: 304px;
  padding: 8px 29px 8px 31px;
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  &:hover ${StyledIconLogout} path {
    fill: ${defaultTheme.colorIconHover};
  }
  & ${StyledIconLogout} path {
    fill: none;
  }
  &:active ${StyledIconLogout} path {
    fill: ${defaultTheme.colorIconActive};
  }
`;

export const Name = styled.div`
  margin-left: 12px;
  color: ${defaultTheme.colorListItemTextDefault};
  font-size: 15px;
  font-weight: 400;
  line-height: 124%; /* 18.6px */
`;
