import styled from "styled-components";
import { ReactComponent as CheckboxSvg } from "./../../../assets/iсons/checkbox/checkbox.svg";
import { ReactComponent as CheckboxCheckedSvg } from "./../../../assets/iсons/checkbox/checkbox-checked.svg";

export const IconCheckbox = styled(CheckboxSvg)`
    width:16px;
    background-color: white;
    cursor:pointer;

    & path {
        /* fill:#ADBFDF; */
        fill:currentColor;
    }

    & path:hover {
        fill:#005FF8;
    }
`;

export const IconCheckboxChecked = styled(CheckboxCheckedSvg)`
    width:16px;
    fill:#005FF8;
    cursor:pointer;

    &:hover {
        fill:#0024CB;
    }
`;