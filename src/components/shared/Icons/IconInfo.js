import styled from "styled-components";
import { defaultTheme } from "../../../theme/default";
import { ReactComponent as InfoSvg } from "./../../../assets/icons/info.svg";


export const IconInfoSmall = styled(InfoSvg)`
    padding: 2px;
    width:16px;
    height:16px;
    path {
        fill:${defaultTheme.colorIconDefault};
    }
`;

export const IconInfoMedium = styled(InfoSvg)`
    width:20px;
    height:20px;
    path {
        fill:${defaultTheme.colorIconDefault};
    }
`;
