import { 
  AnalyticsCalls, 
  Partner, 
  StyledHeader, 
  StyledHeaderWrapper, 
  StyledIconKeyboardArrowDown, 
  StyledIconSearch, 
  Today 
} from "./styles";

function Header() {
  return (
      <StyledHeader>
        <StyledHeaderWrapper>
          <Today>
            Среда, 13 окт
          </Today>
          <AnalyticsCalls>
          </AnalyticsCalls>
          <StyledIconSearch />
          <Partner >
            ИП Сидорова Александра Михайловна
            <StyledIconKeyboardArrowDown />
          </Partner>
          
        </StyledHeaderWrapper>

      </StyledHeader>
  );
}

export default Header;