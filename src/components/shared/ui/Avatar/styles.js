import styled from 'styled-components';

export const StyledAvatar = styled.div`
  display: flex;
  align-items:center;
  & > img {
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }
`;