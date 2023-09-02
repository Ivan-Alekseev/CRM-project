import styled from 'styled-components';
import {defaultTheme} from '../../../../../theme/default';

export const StyledProfileManager = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  color: ${defaultTheme.colorBlackForText};
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 21px */
`;

export const TermOfWork = styled.div`
  color: #899cb1;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;
