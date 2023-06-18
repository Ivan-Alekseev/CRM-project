import { Logo }  from "./../../shared/ui/index";
import Nav from "./Nav/Nav";
import { StyledSideBar } from "./styles";

function SideBar() {
  return (
      <StyledSideBar>
        <Logo />
        <Nav />
      </StyledSideBar>
  );
}

export default SideBar;