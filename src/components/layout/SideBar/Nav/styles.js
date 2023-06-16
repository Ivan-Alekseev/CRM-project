import styled from "styled-components";


import Ul from '../../../../styled/ul/ul';
import Button from "../../../ui/Button/Button";

export const StyledNav = styled(Ul)`
    display: flex;
    flex-direction: column;
    margin-bottom:64px;
`;

export const StyledNavButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`;

export const ButtonSiderBar = styled(Button)`
    margin-bottom: 32px;
`;




