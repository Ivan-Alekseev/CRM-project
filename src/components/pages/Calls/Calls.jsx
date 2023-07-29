import MusicPlayer from "../../feature/MusicPlayer/MusicPlayer";
import { ListCalls } from "./../../feature/index";
import { StyledCalls } from "./styles";

function Calls() {
  return (
      <StyledCalls>
        {/* <ListCalls /> */}
        <MusicPlayer />
      </StyledCalls>
  );
}

export default Calls;