import styled from "styled-components";
import { ReactComponent as MailOutlineSvg } from "./../../../assets/icons/mail-outline.svg";
import { defaultTheme } from "../../../theme/default";

export const IconMailOutline = styled(MailOutlineSvg)`
    width:24px;
    height:24px;
    path {
        fill:${defaultTheme.colorIconDefault};
    }
`;

