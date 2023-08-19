import styled from "styled-components";
import { ReactComponent as PhoneSvg } from "./../../../assets/icons/phone.svg";
import { ReactComponent as PhoneOutlineSvg } from "./../../../assets/icons/phone-outline.svg";
import { defaultTheme } from "../../../theme/default";

export const IconPhone = styled(PhoneSvg)`
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

export const IconPhoneOutline = styled(PhoneOutlineSvg)`
    width:24px;
    height:24px;
    path {
        fill:${defaultTheme.colorIconDefault};
    }
`;

