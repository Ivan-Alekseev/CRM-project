import { typeOfGrades } from "../../../shared/ui/Grade/styles";
import GradeLabel from "../../../shared/ui/GradeLabel/GradeLabel";
import GradeCheckbox from "../feature/GradeCheckbox/GradeCheckbox";
import { typeOfGradesCheckbox } from "../feature/GradeCheckbox/styles";
import GradeConversion from "../feature/GradeConversion/GradeConversion";
import GradeTalksProgress from "../feature/GradeTalksProgress/GradeCheckbox";
import { StyledTotalTable, TotalTalksConversion } from "./styles";




function TotalTable({ data }) {
  return (
    <StyledTotalTable>
      <th width="40px">
        </th>
      <th width="127px" align="left">
        <span>Все</span>
      </th>
      <th width="127px" align="left">
        <GradeTalksProgress 
        calls={data.calls}
        recognized={data.recognized}
        byScript={data.byScript}
        />
      </th>
      <th width="127px" align="center">
        <GradeConversion>
          {data.conversion}
        </GradeConversion>
      </th>
      <th width="110px" align="left">
        <GradeCheckbox type={typeOfGradesCheckbox.DEFAULT}/>
      </th>
      <th width="110px" align="left">
      <GradeCheckbox type={typeOfGradesCheckbox.TRUE}/>
      </th>
      <th width="110px" align="left">
        <GradeCheckbox type={typeOfGradesCheckbox.DEFAULT}/>
      </th>
      <th width="110px" align="left">
        <GradeCheckbox type={typeOfGradesCheckbox.DEFAULT}/>
      </th>
      <th width="110px" align="left">
      <GradeCheckbox type={typeOfGradesCheckbox.DEFAULT}/>
      </th>
      <th width="110px" align="left">
      <GradeCheckbox type={typeOfGradesCheckbox.TRUE}/>
      </th>
      <th width="90px" align="left">
      <GradeCheckbox type={typeOfGradesCheckbox.TRUE}/>
      </th>
      <th width="70px" align="left">
        <GradeLabel type={typeOfGrades.PERFECT}/>
      </th>
      <th width="40px">
        </th>
    </StyledTotalTable>
  );
}

export default TotalTable;
