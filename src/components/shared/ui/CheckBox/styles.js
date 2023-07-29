import styled from "styled-components";

export const StyledCheckBox = styled.div`
   /* opacity: 0; */
   & label {    
    display: flex;
    gap: 5px;
    align-items: center;
    margin: 2px;
    color:red;
    
    &:hover {
      color:red;
    }
  }

   & input {   
     display:none;
   }
`;