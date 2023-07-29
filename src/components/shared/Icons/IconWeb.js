import styled from "styled-components";
import { defaultTheme } from "../../../theme/default";
import { ReactComponent as WebSvg } from "./../../../assets/iсons/web.svg";


export const IconWeb = styled(WebSvg)`
    width:20px;
    height:20px;
    path {
        fill:${defaultTheme.colorIconDefault};
    }
`;
