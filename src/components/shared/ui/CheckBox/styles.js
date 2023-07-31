import styled from "styled-components";
import { defaultTheme } from "../../../../theme/default";
import { IconCheckbox } from "../../Icons";

export const StyledCheckBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position:relative;

input {
    cursor:pointer;
    width:16px;
    height:16px;
    opacity:0;
    top:1px;
    left:2px;
    position:absolute;
    
}
& input:hover {
    opacity:0;
    border:1px solid red;
}
input:hover {
    & + ${IconCheckbox}{
        opacity:1;
        border:1px solid red;
    }
}

`;