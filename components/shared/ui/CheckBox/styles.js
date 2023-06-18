import styled from "styled-components";

export const StyledCheckBox = styled.div`
   /* opacity: 0; */
   & > label {    
    display: flex;
    gap: 5px;
    align-items: center;
    margin: 2px;
   }
   & > label > input {   
     display:none;
   }

   & input + div {
    /* width: 20px;
    height: 20px;
    border: 3px solid darkgray;
    border-radius: 6px;
    box-sizing: border-box; */
   }
`;