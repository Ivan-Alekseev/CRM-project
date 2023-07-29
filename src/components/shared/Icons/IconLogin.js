import styled from "styled-components";
import { ReactComponent as LoginSvg } from "./../../../assets/icons/login.svg";
import { defaultTheme } from "../../../theme/default";

export const IconLogin = styled(LoginSvg)`
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
