import { StyledGradeLabel, grades } from "./styles";

function GradeLabel( { type } ) {
  return (
    <StyledGradeLabel type={type}>{grades[type].text}</StyledGradeLabel>
  );
}

export default GradeLabel;