import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;

  & > div {
    margin-right: 32px;
  }
  & > :last-child {
    margin-right: 0px;
  }
`;