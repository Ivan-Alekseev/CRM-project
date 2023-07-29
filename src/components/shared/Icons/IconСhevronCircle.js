import styled from "styled-components";
import { ReactComponent as СhevronCircleSvg } from "./../../../assets/iсons/chevron-down-circle.svg";
import { defaultTheme } from "../../../theme/default";

export const IconСhevronCircleDown = styled(СhevronCircleSvg)`
    width:24px;
    height:24px;
    cursor:pointer;

    &:hover circle {
        fill:${defaultTheme.colorButtonHover};
    }
    &:active circle {
        fill:${defaultTheme.colorButtonActive};
    }
`;

export const IconСhevronCircleUp = styled(СhevronCircleSvg)`
    width:24px;
    height:24px;
    cursor:pointer;
    transform: rotate(-180deg);

    &:hover circle {
        fill:${defaultTheme.colorButtonHover};
    }
    &:active circle {
        fill:${defaultTheme.colorButtonActive};
    }
`;

