import styled from "styled-components";
import { IconClose, IconPlay, IconDownload, IconСhevronCircleDown } from '../../shared/Icons';
import { defaultTheme } from "../../../theme/default";

export const StyledMusicPlayer= styled.div`
  width: 352px;
  height: 48px;
  background-color:${defaultTheme.colorMusicPlayBackGround};
  border-radius: 48px;
  box-sizing: border-box;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:12px 16px 12px 18px;
  &:hover {
    cursor:pointer;
  }

  &:hover ${IconClose}{
    cursor:pointer;
    color: ${defaultTheme.colorButtonHover};
  }
`;


export const StyledIconPlay = styled(IconPlay)`
`;

export const StyledIconClose = styled(IconClose)`

  color: ${defaultTheme.colorMusicPlayBackGround};
`;

export const StyledIconDownload = styled(IconDownload)`
  color: ${defaultTheme.colorButtonDefault};
  &:hover {
    cursor:pointer;
    color: ${defaultTheme.colorButtonHover};
  }
`;

export const StyledTimeLine = styled.div`
  background-color:${defaultTheme.colorButtonDefault};
  width: 164px;
  height:4px;
  border-radius: 50px;
`;


export const StyledIconHelp = styled(IconСhevronCircleDown)`
 
`;
