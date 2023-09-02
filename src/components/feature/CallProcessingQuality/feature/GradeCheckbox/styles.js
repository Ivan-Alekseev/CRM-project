import styled from 'styled-components';

export const typeOfGradesCheckbox = {
  DEFAULT: 'default',
  TRUE: 'true',
  FALSE: 'false',
};

export const grades = {
  default: {
    backgroundColor: '#D8E4FB',
  },

  true: {
    backgroundColor: '#28A879',
  },
  false: {
    backgroundColor: '#EA1A4F',
  },
};

export const StyledGradeCheckbox = styled.div`
  background-color: ${(props) =>grades[props.type].backgroundColor};
  width: 20px;
  height: 20px;
  border-radius: 4px;
`;
