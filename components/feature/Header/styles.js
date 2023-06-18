import styled from "styled-components";
import { Section } from './../../../styled/index';
import { 
    IconSearch,
    IconKeyboardArrowDown 
} from "../../shared/Icons/index";

export const StyledHeader = styled.header`
    height:64px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px #E9EDF3;
    width: ${(props) => props.theme.pageWidth};
    margin: 0 auto;
`;

export const StyledHeaderWrapper = styled(Section)`
    margin: 0 auto;
    width:1440px;
    height:100%;
    border:1px solid red;
    display: flex;
    align-items: center;
`;

export const Today = styled.p`
    padding:0;
    margin:0;
    width:136px;
    margin-right: 40px;
    border:1px solid red;
`;

export const AnalyticsCalls = styled.div`
    width:594px;
    height:100%;
    margin-right: 189px;
    border:1px solid red;
`;

export const StyledIconSearch = styled(IconSearch)`
    padding:16px 8px;
    border:1px solid red;
    margin-right: 56px;
    &:hover {
        color:#002CFB;
    }
`;

export const Partner = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-between;
    font-weight: 400;
    line-height:21px;
    font-size:15px;
    color:#899CB1;
    cursor: pointer;
    border:1px solid red;
    &:hover {
        color:#002CFB;
    }
`;

export const StyledIconKeyboardArrowDown = styled(IconKeyboardArrowDown)`
    padding:8px 6px;
    width:16px;
    height:16px;
    margin-right: 40px;
    border:1px solid red;
`;


