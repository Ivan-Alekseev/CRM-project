import styled from "styled-components";

export const grades = {
  'bad':{
    backgroundColor : '#FEE9EF',
    color :'#EA1A4F',
    text:'Плохо',
    width: '55px',
    height: '26px',
    borderColor: '#EA1A4F'
  },
  'good':{
    backgroundColor : '#D8E4FB',
    color :'#122945',
    text:'Хорошо',
    width: "66px",
    height: "26px",
    borderColor: '#ADBFDF'
  },
  'perfect':{
    backgroundColor : '#DBF8EF',
    color :'#00A775',
    text:'Отлично',
    width: '70px',
    height: '26px',
    borderColor: '#28A879'
  }
}

export const StyledGradeLabel = styled.div`
  margin: 0;
  box-sizing: border-box;
  padding: 6px 8px;
  border-radius: 4px;
  line-height: 14px;
  font-size: 14px;
    
  color: ${(props) => grades[props.type].color};
  background-color: ${(props) => grades[props.type].backgroundColor};
  width:  ${(props) => grades[props.type].width};
  height: ${(props) => grades[props.type].height};
  border: ${(props) => `1px solid ${grades[props.type].borderColor}`};

  font-family: ${(props) => props.theme.fontFamily};
  font-weight: ${(props) => props.theme.fontWeightDefault};
  

`;