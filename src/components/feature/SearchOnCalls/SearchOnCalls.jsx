import { IconClose, IconSearch } from "../../shared/Icons";
import { Input, Content } from "./styles";

function SearchOnCalls() {
  return (
      <Content>
        <IconSearch />
        <Input 
          type="tel"
          name="tel"
          placeholder='Поиск по звонкам'
          pattern=""
        />
        <IconClose />
      </Content>
  );
}

export default SearchOnCalls;