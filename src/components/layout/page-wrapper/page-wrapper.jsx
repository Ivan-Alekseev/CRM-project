import SideBar from "../../feature/SideBar/SideBar";
import Header from "../../feature/Header/Header";
import Main from "../Main/Main";
import { StyledPageWrapper, StyledContentWrapper } from "./styles";
import Calls from "../../pages/Calls/Calls";

function PageWrapper() {
  return (
    <StyledPageWrapper>
      <SideBar />
      <StyledContentWrapper>
          <Header />
          <Main page={<Calls/>}/>
        </StyledContentWrapper>
    </StyledPageWrapper>
  );
}

export default PageWrapper;
