import {useState} from 'react';
import {StyledCheckBox} from './styles';
import {IconCheckbox, IconCheckboxChecked} from '../../Icons';

function CheckBox({id, onClick, checked}) {
  const [checkBox, setChecked] = useState(<IconCheckbox />);

  return (
    <StyledCheckBox
      onClick={(e) => {
        onClick(e.target);
      }}
    >
      <label>
        <input type="checkbox" name="checkbox" id={id} />
      </label>
      {checked ? <IconCheckboxChecked /> : <IconCheckbox />}
    </StyledCheckBox>
  );
}

export default CheckBox;
