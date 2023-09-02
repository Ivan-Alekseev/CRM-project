import styled from 'styled-components';
import {Li} from './../../../../styled/index';
import {defaultTheme} from '../../../../theme/default';

export const StyledMenuItem = styled(Li)``;

export const StyledIconActive = styled.div`
  margin-left: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ffd500;
  box-shadow: 0px 3px 8px rgba(237, 218, 1, 0.5);
`;

export const StyledMenuItemWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;

  ${(props) =>
    props.iconActive
      ? `
    border-left: 3px solid #002cfb;
    background:rgba(216, 228, 251, 0.32);
    color:${defaultTheme.colorWhite};
    padding: 14px 12px 14px 9px;
    `
      : `
    color:${defaultTheme.colorGray};
    padding: 14px 12px 14px 12px;
    `};

  transition: background-color 0.3s ease-out, box-shadow 0.2s ease-out;

  & div {
    display: flex;
    align-items: center;
  }
  & > div > :first-child {
    margin-right: 12px;
  }

  &:hover {
    background: rgba(216, 228, 251, 0.32);
    border-left: 3px solid #002cfb;
    color: #fff;
    padding-left: 9px;
  }

  &:active {
    background: rgba(216, 228, 251, 0.32);
    border-left: 3px solid #002cfb;
    color: #fff;
    padding: 14px 12px 14px 9px;
  }
`;
