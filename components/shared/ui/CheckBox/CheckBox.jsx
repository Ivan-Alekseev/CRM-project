import { StyledCheckBox, StyledCheckBoxs } from "./styles";
import { IconCheckbox } from "../../Icons";

function CheckBox() {
  return (
    <StyledCheckBox >
      <label class="mylabel">
        <input type="checkbox" name="checkbox" />

        <IconCheckbox />
      </label>
    </StyledCheckBox>
  );
}

export default CheckBox;