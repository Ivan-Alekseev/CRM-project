import styled from "styled-components";
import { Ul } from './../../../../styled/index';
import { Button } from "./../../../shared/ui/index";

export const StyledNav = styled(Ul)`
    display: flex;
    flex-direction: column;
    margin-bottom:64px;
`;

export const StyledNavButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;

& button {
    margin-bottom: 32px;  
}


& > :last-child {
    margin-bottom: 0px;  
}
`;

export const ButtonSiderBar = styled(Button)`
    
`;




