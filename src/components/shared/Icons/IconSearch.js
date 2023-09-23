import styled from "styled-components";
import { ReactComponent as SearchSvg } from "./../../../assets/icons/search.svg";

export const IconSearch = styled(SearchSvg)`
    width:16px;
    height:16px;
    cursor:pointer;

    & path:hover {
        cursor:pointer;
        fill:currentColor;
    }
`;

