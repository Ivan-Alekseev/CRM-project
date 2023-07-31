import styled from "styled-components";

export const StyledListCalls = styled.div`
    background: #FFFFFF;
    & table {
        border-collapse: collapse;
    }
`;

export const StyledItemTable = styled.tr`
    background: #FFFFFF;
    & > td {
        
        height:63px;
        font-weight: 400;
        font-size:15px;
        line-height: 21px;
        box-sizing: border-box;

    }
    &:hover {
        cursor: pointer;
        background: rgba(212, 223, 243, 0.17);
    }
`;

export const IconTypeCall = styled.td`
    display: flex;
    align-items: center;
`;

export const Number = styled.td`
    vertical-align: middle;
`;

export const Source = styled.td`
    color:#5E7793;
`;