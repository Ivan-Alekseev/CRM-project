import styled from "styled-components";

export const grades = {
  'bad':{
    backgroundColor : '#EA1A4F',
  },
  'good':{
    backgroundColor : '#ADBFDF',
  },
  'perfect':{
    backgroundColor : '#28A879',
  }
}

export const StyledGradeCircle = styled.div`
  width:8px;
  height:8px;
  border-radius: 50%;

  background-color: ${(props) => grades[props.type].backgroundColor};
`;