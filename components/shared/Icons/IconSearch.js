import styled from "styled-components";
import { ReactComponent as SearchSvg } from "./../../../assets/iсons/search.svg";

export const IconSearch = styled(SearchSvg)`
    width:16px;
    width:16px;
    fill:red;
    cursor:pointer;

    & > path:hover {
        cursor:pointer;
        fill:currentColor;
    }
`;

