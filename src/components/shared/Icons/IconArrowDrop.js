import styled from "styled-components";
import { ReactComponent as ArrowDropSvg } from "./../../../assets/icons/arrow_drop_down.svg";
import { defaultTheme } from "../../../theme/default";

export const IconArrowDropDown = styled(ArrowDropSvg)`
    width:24px;
    height:24px;
    path {
        fill:${defaultTheme.colorIconDefault};
    }
    &:hover {
        cursor: pointer;
    }
    &:hover path{ 
        fill:${defaultTheme.colorIconHover};
    }
    &:active path{ 
        fill:${defaultTheme.colorIconActive};
    }
`;

export const IconArrowDropUp = styled(ArrowDropSvg)`
    transform: rotate(-180deg);
    width:24px;
    height:24px;
    path {
        fill:${defaultTheme.colorIconDefault};
    }
    &:hover {
        cursor: pointer;
    }
    &:hover path{ 
        fill:${defaultTheme.colorIconHover};
    }
    &:active path{ 
        fill:${defaultTheme.colorIconActive};
    }
`;

