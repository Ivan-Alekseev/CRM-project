import { IconKeyboardArrowDown, IconKeyboardArrowUp } from "../../../shared/Icons";
import { StyledUserIcon, StyledUser } from "./styles";
import img from "./../../../../assets/icons/avatars/avatar-3.svg";

const User = ({
  visibility,
  changeVisibility
}) => {
  return (
    <StyledUser onClick={() => {
      changeVisibility();
    }}>
      <StyledUserIcon src={img}/>
      {visibility ? <IconKeyboardArrowDown /> : <IconKeyboardArrowUp />}
    </StyledUser>
  );
}

export default User;
