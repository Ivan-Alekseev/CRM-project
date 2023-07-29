import GradeCircle from "../GradeCircle/GradeCircle";
import { StyledGradeCircles } from "./styles";

function GradeCircles({ type }) {


  return (
    <StyledGradeCircles>
      <GradeCircle type={type} />
      <GradeCircle type={type} />
      <GradeCircle type={type} />
    </StyledGradeCircles>
  );
}

export default GradeCircles;
