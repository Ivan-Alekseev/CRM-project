import styled from "styled-components";
import { ReactComponent as KeyboardArrowSvg } from "./../../../assets/iсons/keyboard_arrow_down.svg";

export const IconKeyboardArrowDown = styled(KeyboardArrowSvg)`

    cursor:pointer;
    & > path:hover {
        fill:currentColor;
    }
`;

export const IconKeyboardArrowUp = styled(KeyboardArrowSvg)`
    cursor:pointer;
    transform: rotate(-180deg);
    & > path:hover {

        fill:currentColor;
    }
`;

