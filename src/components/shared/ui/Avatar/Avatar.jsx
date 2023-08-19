import { StyledAvatar } from "./styles";
import { IconUnknownAvatar } from "./../../Icons/index";

function Avatar({ src, alt }) {
  return (
    <StyledAvatar>
      {src ? <img src={src} alt={alt} /> : <IconUnknownAvatar />}
    </StyledAvatar>
  );
}

export default Avatar;
