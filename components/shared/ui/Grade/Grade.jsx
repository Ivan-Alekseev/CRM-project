import GradeCircles from "./../GradeCircles/GradeCircles";
import GradeLabel from "./../GradeLabel/GradeLabel";
import { StyledGrade } from "./styles";

function Grade({ type }) {
  return (
    <StyledGrade>
      <GradeCircles type={type} />
      <GradeLabel type={type} />
    </StyledGrade>
  );
}

export default Grade;
