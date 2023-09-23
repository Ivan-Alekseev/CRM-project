import styled from 'styled-components';
import {ReactComponent as CheckboxSvg} from './../../../assets/icons/checkbox/checkbox.svg';
import {ReactComponent as CheckboxCheckedSvg} from './../../../assets/icons/checkbox/checkbox-checked.svg';
import {defaultTheme} from '../../../theme/default';

export const IconCheckbox = styled(CheckboxSvg)`
  padding: 4px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  position: relative;
  path {
    fill: ${defaultTheme.colorCheckboxOffDefault};
  }
  &:hover path {
    fill: ${defaultTheme.colorCheckboxOffHover};
  }
  &:active path {
    fill: ${defaultTheme.colorCheckboxOffActive};
  }
`;

export const IconCheckboxChecked = styled(CheckboxCheckedSvg)`
  padding: 4px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  path {
    fill: ${defaultTheme.colorCheckboxOnDefault};
  }
  &:active path {
    fill: ${defaultTheme.colorCheckboxOffActive};
  }
`;
