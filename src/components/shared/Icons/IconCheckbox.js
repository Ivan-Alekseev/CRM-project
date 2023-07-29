import styled from "styled-components";
import { ReactComponent as CheckboxSvg } from "./../../../assets/iсons/checkbox/checkbox.svg";
import { ReactComponent as CheckboxCheckedSvg } from "./../../../assets/iсons/checkbox/checkbox-checked.svg";
import { defaultTheme } from "../../../theme/default";

export const IconCheckbox = styled(CheckboxSvg)`
    width:16px;
    height:16px;
    path {
        cursor: pointer;
        fill:${defaultTheme.colorCheckboxOffDefault};
    }
    &:hover path{
        fill:${defaultTheme.colorCheckboxOffHover};
    }
    &:active path{ 
        fill:${defaultTheme.colorCheckboxOffActive};
    }
`;

export const IconCheckboxChecked = styled(CheckboxCheckedSvg)`
    path {
        cursor: pointer;
        fill:${defaultTheme.colorCheckboxOnDefault};
    }
    &:hover path{
        fill:${defaultTheme.colorCheckboxOnHover};
    }
`;