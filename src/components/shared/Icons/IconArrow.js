import styled from "styled-components";
import { ReactComponent as KeyboardArrowSvg } from "./../../../assets/icons/keyboard_arrow_down.svg";
import { defaultTheme } from "../../../theme/default";

export const IconKeyboardArrowDown = styled(KeyboardArrowSvg)`
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

export const IconKeyboardArrowUp = styled(KeyboardArrowSvg)`
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

