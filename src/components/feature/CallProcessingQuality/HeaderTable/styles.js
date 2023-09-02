import styled from 'styled-components';

export const StyledHeaderTable = styled.thead`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
 
  & tr {
    vertical-align: top;
    
  }
  & tr th {
    padding:0px;
    color: #899cb1;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    
  }
  & > tr > th > tr > th span {
    line-height: 17.36px; /* 17.36px */
    position: relative;
  }
  
  & tr > th:nth-child(2) > tr:nth-child(1) > th > span > sup {
    position: absolute;
    top:-6px;
    right:-18px;
    line-height: 17.36px; /* 17.36px */
  }
  & tr > th:nth-child(2) > tr:nth-child(2) > th > span > sup {
    position: absolute;
    top:-6px;
    right:-14px;
    line-height: 17.36px; /* 17.36px */
  }


`;
