import styled from 'styled-components';

export const StyledCalls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 1440px;
  margin: 0 auto;
  padding: 0px 120px 0px 120px;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 34px;

& > :first-child {
    margin-right: 48px;
}
`;

export const GroupSearchAndFilter = styled.div`
width:100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;