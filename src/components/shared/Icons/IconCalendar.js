import styled from "styled-components";
import { ReactComponent as IconCalendarSvg } from "./../../../assets/icons/icon-calendar.svg";
import { defaultTheme } from "../../../theme/default";

export const IconCalendar = styled(IconCalendarSvg)`
    width:16px;
    height:18px;
    padding:3px 4px;
    cursor:pointer;

    & path:hover {
        cursor:pointer;
        fill:${defaultTheme.colorIconHover};
    }
`;

