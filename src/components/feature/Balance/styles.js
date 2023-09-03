import styled from 'styled-components';
import {IconCross} from './../../shared/Icons/index';
import {defaultTheme} from '../../../theme/default';

export const Value = styled.div`
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 148%;
  color: #122945;
`;

export const IconCrossBlue = styled(IconCross)`
  width: 24px;
  height: 24px;

  path {
    fill: ${defaultTheme.colorButtonHover};
    fill-opacity: 100%;
  }
`;

export const StyledBalance = styled.div`
  min-width: 145px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 48px;
  box-sizing: border-box;
  cursor: pointer;


  &:hover ${Value} {
    color: ${defaultTheme.colorBalanceValue};
  }
  &:active ${Value} {
    color: ${defaultTheme.colorBlackForText};
  }
  &:hover ${IconCrossBlue} {
    path {
      fill: ${defaultTheme.colorBalanceValue};

  }
  }
  &:active ${IconCrossBlue} {
  path {
    fill: ${defaultTheme.colorButtonActive};
  }
  }


`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  margin-right: 10px;
`;

export const Text = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 148%; /* 20.72px */
  color: ${defaultTheme.colorFilterDefault};
  margin-right: 2px;
`;


