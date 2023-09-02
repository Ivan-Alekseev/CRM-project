import styled from 'styled-components';
import {defaultTheme} from '../../../../../theme/default';

export const StyledGradeConversion = styled.div`
  color: ${(props) => {
    if (parseInt(props.children) <= 40) {
      return defaultTheme.colorRed;
    } else if (
      80 > parseInt(props.children) &&
      parseInt(props.children) >= 40
    ) {
      return defaultTheme.colorBlackForText;
    } else {
      return defaultTheme.colorGreen;
    }
  }};
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
`;
