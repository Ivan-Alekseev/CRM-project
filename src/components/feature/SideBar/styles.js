import styled from 'styled-components';
import Section from '../../../styled/section/section';
import {defaultTheme} from '../../../theme/default';

export const StyledSideBar = styled(Section)`
  display: flex;
  flex-direction: column;
  min-height: 960px; //временно
  background: ${defaultTheme.colorSideBarBackground};
`;
