import { StyledAvatar } from "./styles";
import unknownAvatarImg from './../../../assets/iсons/avatars/unknown-avatar.svg';




function Avatar( { img } ) {
  return (
    <>
      <StyledAvatar src={ img ? img  : unknownAvatarImg }/>
    </>    
  );
}

export default Avatar;