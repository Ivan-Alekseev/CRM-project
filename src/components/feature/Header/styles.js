import styled from 'styled-components';
import {Section} from './../../../styled/index';
import {IconSearch, IconKeyboardArrowDown} from '../../shared/Icons/index';
import {defaultTheme} from '../../../theme/default';
import Select from '../Select/Select';


export const StyledHeader = styled.header`
  height: 64px;
  background: #ffffff;
  box-shadow: 0px 4px 5px 0px #e9edf3;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
`;

export const StyledHeaderWrapper = styled(Section)`
  margin: 0 auto;
  width: 1440px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Today = styled.p`
  padding: 0;
  margin: 0;
  width: 136px;
  margin-right: 40px;
`;

export const StyledIconSearch = styled(IconSearch)`
  padding: 16px 8px;
  margin-right: 56px;
  &:hover {
    color: #002cfb;
  }

`;

export const StyledIconKeyboardArrowDown = styled(IconKeyboardArrowDown)`
  width: 24px;
  height: 24px;
  box-sizing: border-box;
  margin-left: 4px;
`;

export const ContacName = styled.div`
  display: flex;
  align-items:center;
  font-weight: 400;
  line-height: 21px;
  font-size: 15px;
  color: #899cb1;
  cursor: pointer;
  margin-right: 41px;
  &:hover {
    color: #002cfb;
  }
  &:hover svg path{
    fill: #002cfb;
  }
`;



export const AnalyticsCalls = styled.div`
  padding-top: 14px;
  padding-bottom: 16px;

  display: flex;
  & > div {
    margin-right: 56px;
  }
  & > div:last-child {
    margin-right: 0px;
  }
`;

export const Text = styled.div`
  margin-bottom: 7px;
  color: ${defaultTheme.colorBlackForText};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 148%; /* 20.72px */

  & span {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 148%;
  }
`;

export const Line = styled.div`
  width: 156px;
  height: 6px;
  border-radius: 12px 12px 12px 12px;
  background-color: #d8e4fb;
  border: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 12px 12px 12px 12px;

    width: ${(props) => props.completion * 100 + '%'};
    height: 100%;
  }
`;

export const NewCalls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  & ${Line}::after {
    background-color: ${defaultTheme.colorGreen};
  }
  & ${Text} > span {
    color: ${defaultTheme.colorGreen};
  }
`;

export const QuantityCalls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  & ${Line}::after {
    background-color: #ffd500;
  }
  & ${Text} > span {
    color: #ffd500;
  }
`;

export const СonversionToOrder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  & ${Line}::after {
    background-color: ${defaultTheme.colorRed};
  }
  & ${Text} > span {
    color: ${defaultTheme.colorRed};
  }
`;

export const LeftBlock = styled.div`
  display: flex;
  align-items: center;
`;
export const RightBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledSelect = styled.div`
  margin-right: 41px;
  & div:first-child > div:first-child {
    color:#899CB1;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 21px */
  }
`;
