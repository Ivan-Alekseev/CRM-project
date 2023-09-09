import {useState} from 'react';
import {Label, Option, StyledIconActive, StyledSelect,  Text,  Wrapper,  WrapperSelect,} from './styles';
import {IconKeyboardArrowDown, IconKeyboardArrowUp} from '../../shared/Icons';

function Select({
  label,
  options
}) {
  const [visibility, setVisibility] = useState('false');
  const [selectedLabel, setLabel] = useState(label);
  const [optionsObj, setSelectedOption] = useState(options);

  const changeVisibility = () => {
    setVisibility(!visibility);
  };

  const handleClick = (e) => {
    const newOptionsObj = optionsObj;
    for (let el of newOptionsObj) {
      if (e.target.value === el.value) {
        el.selected = 'true';
      } else {
        el.selected = 'false';
      }
    }
    changeVisibility();
    setLabel(e.target.textContent);
    setSelectedOption(newOptionsObj);
  };

  return (
    <Wrapper>
      <div
        onClick={() => {
          changeVisibility();
        }}
      >
        <Text>{selectedLabel}</Text>
        {visibility ? <IconKeyboardArrowDown /> : <IconKeyboardArrowUp />}
      </div>
      <WrapperSelect visibility={visibility}>
        <Label>{selectedLabel}</Label>
        <StyledSelect>
          {optionsObj
            ? optionsObj.map((option) => (
                <>
                  <Option
                    key={option.value}
                    value={option.value}
                    selected={option.selected ? 'selected' : false}
                    onClick={(e) => {
                      handleClick(e);
                    }}
                  >
                    {option.label}
                    {option.isNewCalls ? <StyledIconActive /> : false}
                  </Option>
                </>
              ))
            : false}
        </StyledSelect>
      </WrapperSelect>
    </Wrapper>
  );
}

export default Select;
