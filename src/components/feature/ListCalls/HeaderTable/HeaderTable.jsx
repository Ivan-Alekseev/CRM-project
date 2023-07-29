import { StyledHeaderTable } from "./styles";

function HeaderTable(
) {
  return (
    <StyledHeaderTable>
      <tr>
        <th width='28px'  align="right" ></th>
        <th width='53px'  align="left">Тип</th>
        <th width='89px' align="center">Время</th>
        <th width='128px' align="left">Сотрудник</th>
        <th width='326px' align="left">Звонок</th>
        <th width='214px' align="left">Источник</th>
        <th width='461px' align="left">Оценка</th>
        <th width='89px'align="right">Длительность</th>
      </tr>
    </StyledHeaderTable>
  );
}

export default HeaderTable;