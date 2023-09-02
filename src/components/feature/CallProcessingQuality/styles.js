import styled from "styled-components";
import { defaultTheme } from "../../../theme/default";
import { IconChevronCircleUp, IconHelp } from "../../shared/Icons";

export const StyledCallProcessingQuality = styled.div`
  padding-bottom:32px;
  position:relative;
  width:1440px;
  border-radius: 8px;
  background: ${defaultTheme.colorWhite};
  /* тень */
  box-shadow: 0px 4px 5px 0px #E9EDF3;

  & ${IconHelp} {
    position:absolute;
    top:16px;
    right:56px;
    cursor:pointer;
  }
  & ${IconChevronCircleUp} {
    position:absolute;
    top:16px;
    right:16px;
  }
`;

export const Title = styled.div`
  padding:32px 0px 20px 40px;
  color: ${defaultTheme.colorBlackForText};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 25.2px */
`;


