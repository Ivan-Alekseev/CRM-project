import styled from "styled-components";
import { defaultTheme } from "../../../theme/default";

export const StyledProfile = styled.div`
  width:368px;
  padding-top:20px;
  background-color: ${defaultTheme.colorWhite};
  box-shadow: 4px 16px 50px rgba(129, 135, 163, 0.24);
  border:1px solid #EAF0FA;
  border-radius: 4px;
  z-index: 10;
  position:absolute;
  top:40px;
  right:0px;
  
  display: ${props => props.visibility? "none" : "inline"};
`;

export const UserProfile = styled.div`
  position: relative;
`;