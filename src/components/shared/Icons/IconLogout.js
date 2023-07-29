import styled from "styled-components";
import { ReactComponent as LogoutSvg } from "./../../../assets/iсons/logout.svg";
import { defaultTheme } from "../../../theme/default";

export const IconLogout = styled(LogoutSvg)`
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
