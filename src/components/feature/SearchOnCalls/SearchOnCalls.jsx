import { useState } from "react";
import { IconClose, IconSearch } from "../../shared/Icons";
import { Input, Content } from "./styles";



function SearchOnCalls() {

  const [inputValue, setInputValue] = useState('');


  const clearValue = () => {
    setInputValue("");
  }

  return (
      <Content>
        <IconSearch />
        <Input 
          type="tel"
          name="tel"
          placeholder="Поиск по звонкам"
          pattern=""
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
        }}/>
        <IconClose onClick={()=> {
          clearValue();
        }}/>
      </Content>
  );
}

export default SearchOnCalls;