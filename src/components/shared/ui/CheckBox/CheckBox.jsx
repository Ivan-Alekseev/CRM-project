import { useState } from "react";
import { StyledCheckBox } from "./styles";
import { IconCheckbox, IconCheckboxChecked } from "../../Icons";


function CheckBox({
  id,
  onClick,
  checked
}) {
  
  const [checkBox, setChecked] = useState(<IconCheckbox />);

   return (
    <StyledCheckBox >
      
      <label>
        <input 
          type="checkbox"
          name="checkbox"
          id={id}
          onClick={ (e)=> {onClick(e.target)}}
        />
      </label>
      
      {
        checked ?
        <IconCheckboxChecked /> : <IconCheckbox />
       }
     </StyledCheckBox>
  );
}

export default CheckBox;