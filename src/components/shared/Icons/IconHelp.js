import styled from "styled-components";
import { ReactComponent as HelpSvg } from "./../../../assets/icons/help.svg";
import { defaultTheme } from "../../../theme/default";

export const IconHelp = styled(HelpSvg)`
    width:24px;
    height:24px;
    :hover circle {
        fill:${defaultTheme.colorButtonHover};
    }
    :active circle {
        fill:${defaultTheme.colorButtonActive};
    }
`;