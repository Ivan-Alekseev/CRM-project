import { StyledIconClose, StyledIconDownload, StyledIconPlay, StyledMusicPlayer, StyledTimeLine, StyledIconHelp } from "./styles";


const MusicPlayerDate = {
  time:'12:08',
} 

function MusicPlayer () {
  return (
      <StyledMusicPlayer>
        {/* {MusicPlayerDate.time}
        
        <StyledIconPlay />
        <StyledTimeLine />

        <StyledIconDownload />
        <StyledIconClose /> */}
        
        
        <StyledIconHelp />
      </StyledMusicPlayer>
  );
}

export default MusicPlayer;