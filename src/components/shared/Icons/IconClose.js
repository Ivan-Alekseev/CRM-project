import styled from "styled-components";
import { ReactComponent as CloseSvg } from "./../../../assets/icons/music-player/button-close.svg";
import { defaultTheme } from "../../../theme/default";

export const IconClose = styled(CloseSvg)`
    width:24px;
    height:24px;
    cursor: pointer;

    path { 
        fill:${defaultTheme.colorIconDefault};
    }
    &:hover path {
        fill:${defaultTheme.colorIconHover};
    }
    &:active path {
        fill:${defaultTheme.colorIconActive};
    }
`;
