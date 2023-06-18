import SideBar from "../../feature/SideBar/SideBar";
import Header from "../../feature/Header/Header";
import Main from "../Main/Main";
import { StyledPageWrapper, StyledSideBarHeaderWrapper } from "./styles";
import Calls from "../../pages/Calls/Calls";



function PageWrapper() {
  return (
    <StyledPageWrapper>
      <SideBar />
      <StyledSideBarHeaderWrapper>
          <Header />
          <Main page={<Calls/>}/>
        </StyledSideBarHeaderWrapper>
    </StyledPageWrapper>
  );
}

export default PageWrapper;
