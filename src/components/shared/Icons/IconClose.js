import styled from "styled-components";
import { ReactComponent as CloseSvg } from "./../../../assets/icons/music-player/button-close.svg";

export const IconClose = styled(CloseSvg)`
    width:24px;
    height:24px;
    path {
        fill:currentColor;
    }
    path:hover {
        fill:currentColor;
    }
`;
