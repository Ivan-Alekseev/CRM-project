import styled from 'styled-components';
import { Li } from './../../../../styled/index';

export const StyledMenuItem = styled(Li)`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:240px;
    height:52px;
    background: none;
    box-sizing: border-box;
    
    padding-left:12px;

    color:#FFFFFF;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    transition: background-color 0.3s ease-out, box-shadow 0.2s ease-out;
    border-left:3px solid #091336;

    &:hover {
        background: rgba(216, 228, 251, 0.32);
        border-left:3px solid #002CFB;
    }
    &:active {
        background: rgba(216, 228, 251, 0.32);
    }
`;

export const StyledIconActive = styled.div`
    margin-left: 2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #FFD500;
    box-shadow: 0px 3px 8px rgba(237, 218, 1, 0.5);
`;

export const StyledMenuItemWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 216px;
`;