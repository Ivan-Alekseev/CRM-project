import styled from 'styled-components';
import {defaultTheme} from '../../../theme/default';
import {IconClose, IconSearch} from '../../shared/Icons';

export const Content = styled.div`
  width: 482px;
  padding-top: 14px;
  padding-bottom: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;

  & ${IconSearch} {
    position: absolute;
    top: auto;
    left: 0px;
  }

  &:hover ${IconSearch} {
    path {
      fill: ${defaultTheme.colorIconHover};
    }
  }

  &:has(input:focus) {
    border-radius: 48px;
    border: 1px solid ${defaultTheme.colorInputFocus};
    background: ${defaultTheme.colorWhite};
    padding: 12px 12px 12px 18px;
    box-sizing: border-box;
  }

  &:has(input:focus) ${IconSearch} {
    top: auto;
    left: 18px;
    path {
      fill: ${defaultTheme.colorIconDefault};
    }
  }

  & ${IconClose} {
    display: none;
  }

  &:has(input:focus) ${IconClose} {
    display: inline;
    
  }

  &:has(input:active) {
    border-color: ${defaultTheme.colorInputActive};
  }

  &:has(input:not(:placeholder-shown)) {
    border-radius: 48px;
    background: ${defaultTheme.colorWhite};
    border: 1px solid ${defaultTheme.colorInputWithValue};
    padding: 12px 12px 12px 18px;
    box-sizing: border-box;
  }

  &:has(input:not(:placeholder-shown)) ${IconClose} {
    display: inline;
    
  }
  &:has(input:not(:placeholder-shown)) ${IconSearch} {
    top: auto;
    left: 18px;
    path {
      fill: ${defaultTheme.colorIconDefault};
    }
  }
`;

export const Input = styled.input`
  width:100%;
  padding-left: 28px;
  line-height:20px;
  cursor: pointer;
  border: none;
  background: none;
  color: ${defaultTheme.colorBlackForText};

  &::placeholder {
    color: ${defaultTheme.colorTextDefault};
    font-size: 14px;
    font-style: normal;
    font-weight: 40px;
    
  }

  &:focus {
    outline: none;
  }
`;
