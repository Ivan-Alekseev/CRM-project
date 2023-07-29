import { StyledLogo } from "./styles";
import { Logo as MainLogo } from "./../../Icons/index";

function Logo() {
  return (
    <StyledLogo href="/">
      <MainLogo />
    </StyledLogo>
  );
}

export default Logo;