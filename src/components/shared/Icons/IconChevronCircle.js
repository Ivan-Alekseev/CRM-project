import styled from "styled-components";
import { ReactComponent as ChevronCircleSvg } from "./../../../assets/icons/chevron-down-circle.svg";
import { defaultTheme } from "../../../theme/default";

export const IconChevronCircleDown = styled(ChevronCircleSvg)`
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

export const IconChevronCircleUp = styled(ChevronCircleSvg)`
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

