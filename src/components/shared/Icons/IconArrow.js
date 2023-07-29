import styled from "styled-components";
import { ReactComponent as KeyboardArrowSvg } from "./../../../assets/iсons/keyboard_arrow_down.svg";
import { defaultTheme } from "../../../theme/default";

export const IconKeyboardArrowDown = styled(KeyboardArrowSvg)`

    cursor:pointer;

    :hover {
        fill:${defaultTheme.colorButtonHover};
    }
    
    :active {
        fill:${defaultTheme.colorButtonActive};
    }
`;

export const IconKeyboardArrowUp = styled(KeyboardArrowSvg)`
    cursor:pointer;
    transform: rotate(-180deg);
    & > path:hover {

        fill:currentColor;
    }
`;

