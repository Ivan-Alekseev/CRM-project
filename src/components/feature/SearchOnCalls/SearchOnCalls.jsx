import { IconClose, IconSearch } from "../../shared/Icons";
import { Input, StyledContent } from "./styles";

function SearchOnCalls() {
  return (
      <StyledContent>
        <IconSearch />
        <Input 
          type="tel"
          name="tel"
          placeholder='Поиск по звонкам'
          pattern=""
        />
        <IconClose />
      </StyledContent>
  );
}

export default SearchOnCalls;