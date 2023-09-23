import Filter from "../../feature/Filter/Filter";
import SearchOnCalls from "../../feature/SearchOnCalls/SearchOnCalls";
import { Balance, DatePicker, ListCalls } from "./../../feature/index";
import { Group, GroupSearchAndFilter, StyledCalls } from "./styles";

function Calls({
  balance=200,
}) {
  return (
      <StyledCalls>
        
        <Group>
          <Balance balance={balance}/>
          <DatePicker />
        </Group>        
        <GroupSearchAndFilter>
          <SearchOnCalls/>
          <Filter/>
        </GroupSearchAndFilter>
        <ListCalls />
      </StyledCalls>
  );
}

export default Calls;