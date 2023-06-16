import SideBar from "../SideBar/SideBar";
import Header from "./../Header/Header";
import Main from "../Main/Main";
import { StyledPageWrapper, StyledSideBarHeaderWrapper } from "./styles";

function PageWrapper() {
  return (
    <StyledPageWrapper>
      <SideBar />
      <StyledSideBarHeaderWrapper>
          <Header />
          <Main />
        </StyledSideBarHeaderWrapper>
    </StyledPageWrapper>
  );
}

export default PageWrapper;
