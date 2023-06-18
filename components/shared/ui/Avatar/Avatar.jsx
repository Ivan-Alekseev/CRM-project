import { StyledAvatar, StyledUnknownAvatar } from "./styles";

function Avatar( { personAvatar } ) {
  return (
    <>
      { personAvatar ?
        <StyledAvatar src={personAvatar}/>
        : <StyledUnknownAvatar />
      }
    </>    
  );
}

export default Avatar;