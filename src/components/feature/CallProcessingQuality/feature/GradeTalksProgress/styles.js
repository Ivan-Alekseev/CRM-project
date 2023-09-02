import styled from 'styled-components';
import { defaultTheme } from '../../../../../theme/default';


export const TotalTalksBar = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 8px;

  & div {
    width: 47px;
    margin-right: 8px;
    line-height: 15px;
    font-weight: 400;
    text-align: right;
  }

  /* ---- прогресс бар----- */
  & hr {
    margin: 0;
    width: 148px;
    height: 8px;
    display: block;
    border-radius: 0px 12px 12px 0px;
    background-color: #d8e4fb;
    border: none;
  }
  /* ---- прогресс бар----- */
`;

export const TotalTalksDetectedBar = styled.div`
  display: flex;

  div:first-child > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const TotalTalksDetectedBarValue = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 47px;
  line-height: 15px;
  font-weight: 400;
  margin-right: 8px;

  div:last-child {
    color: ${(props)=> 
      props.byScript >= 50 ?
      defaultTheme.colorGreen:
      defaultTheme.colorRed
    };
  }
`;

export const TotalTalksDetectedBarLine = styled.div`
  width: 148px;
  height: 15px;
  & hr {
    margin: 0;
    border-radius: 0px 12px 12px 0px;
    width: 124px;
    height: 8px;
    background-color: #d8e4fb;
    border: none;
    position: relative;
  }

  & hr::after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 0px 12px 12px 0px;

    width:${props=>props.byScript+"%"};
    height: 100%;
    background-color: ${(props)=> 
      props.byScript >= 50 ?
      defaultTheme.colorGreen:
      defaultTheme.colorRed
    };
  }
`;
