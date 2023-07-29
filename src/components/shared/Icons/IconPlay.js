import styled from "styled-components";
import { ReactComponent as PlaySvg } from "./../../../assets/iсons/music-player/button-play.svg";

export const IconPlay = styled(PlaySvg)`
    width:24px;
    height:24px;
    color:red;
    & > path:hover {
        fill: #274BC8;
        cursor: url("../../../assets/iсons/cursor-pointer.svg"), pointer;
    }
`;

