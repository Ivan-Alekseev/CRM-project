import { defaultTheme } from 'react-select';
import styled from 'styled-components';

export const StyledItemTable = styled.tr`
  background: #ffffff;
  border-top:1px solid #EAF0FA;
  box-sizing: border-box;
  height:65px;

  & > td {
    margin:auto;
    padding: 0;
    font-weight: 400;
    font-size: 15px;
    line-height: 140%; /* 21px */
    box-sizing: border-box;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(212, 223, 243, 0.17);
  }
`;

export const StyledListCalls = styled.div`
  width: 1440px;
  margin: 0 auto;
  
  & table {
    background: #ffffff;
    border-spacing:0px;
    border-collapse: collapse;
    border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  }
  & > table > tbody > tr:last-child > td:first-of-type{
    border-bottom-left-radius: 8px;
  }
  & > table > tbody > tr:last-child > td:last-of-type {
    border-bottom-right-radius: 8px;
  }
`;

export const IconTypeCall = styled.td`
`;

export const UnknownCall = styled.tr`
  color: ${defaultTheme.colorBlackForText};
`;

export const ContactName = styled.tr`
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 21px */
`;

export const ContactCompany = styled.tr`
color: #5e7793;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 21px */
`;

export const NumberCall = styled.tr`
color: #5e7793;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 140%; /* 21px */
`;

export const Source = styled.td`
  color: #5e7793;
`;
