import styled from 'styled-components';
import {defaultTheme} from '../../../theme/default';
import {IconKeyboardArrowDown} from '../../shared/Icons';
import {Ul, Li} from '../../../styled/index';

export const Text = styled.div`
  color: ${defaultTheme.colorFilterDefault};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  cursor: pointer;
  margin-right: 4px;
  color: #5e7793;
  display: flex;
`;

export const Label = styled.div`
  color: ${defaultTheme.colorFilterDefault};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  cursor: pointer;
  color: ${defaultTheme.colorButtonHover};
  background-color: ${defaultTheme.colorWhite};
  display: flex;
  align-items: center;
  padding-top: 6px;
  padding-left: 21px;
  padding-bottom: 6px;
`;

export const Option = styled(Li)`
  color: ${defaultTheme.colorFilterDefault};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  cursor: pointer;
  padding-top: 6px;
  padding-left: 21px;
  padding-bottom: 6px;
  display: flex;
  align-items: center;
`;

export const StyledSelect = styled(Ul)`
  color: ${defaultTheme.colorFilterDefault};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 148%;
  width: 202px;
  cursor: pointer;
  & > ${Option}:hover {
    color: ${defaultTheme.colorBlackForText};
    background-color: rgb(0, 44, 251, 0.13);
  }
  :last-child {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;



export const WrapperSelect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:start;
  position: absolute;
  top: 28px;
  right: 0px;
  ${(props) =>
    props.visibility
      ? `visibility: hidden;
          opacity: 0;

        `
      : `
        visibility: visible;
        opacity: 1;
  `};
  transition-duration: 500ms;
  transition-property: opacity;
  box-shadow: 0px 0px 26px 0px rgba(233, 237, 243, 0.8);
  background-color: ${defaultTheme.colorWhite};
  border-radius: 4px;
  border: 1px solid #eaf0fa;

`;

export const Wrapper = styled.div`
  position: relative;
  & > div {
    display: flex;
  }
  & > div:hover > ${IconKeyboardArrowDown} path {
    fill: ${defaultTheme.colorButtonHover};
  }
`;

export const StyledIconActive = styled.div`
  margin-left: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ffd500;
  box-shadow: 0px 3px 8px rgba(237, 218, 1, 0.5);
`;