import styled from 'styled-components';
import {defaultTheme} from '../../../../theme/default';

export const StyledTotalTable = styled.tr`
height:60px;
border-top:1px solid #EAF0FA;
  &:hover {
    cursor:pointer;
    background-color: rgba(212, 223, 243, 0.17);
 ;
  }
  & span {
    color: ${defaultTheme.colorBlackForText};
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 21px */
    margin-left: 52px;
  }
  & tr {
    vertical-align: top;
  }
  & tr th {
    color: #899cb1;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17.36px; /* 17.36px */
  }
  & > tr > th > tr > th span {
    margin-right: 4px;
  }
`;
