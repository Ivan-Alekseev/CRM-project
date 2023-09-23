import {CheckBox} from '../../../shared/ui';
import {StyledHeaderTable} from './styles';

function HeaderTable({checkedAll, checked}) {
  return (
    <StyledHeaderTable>
      <tr>
        <th width="40px">
          <CheckBox checked={checked}
            onClick={() => {
              checkedAll();
            }}
          />
        </th>
        <th width="53px" align="left">
          Тип
        </th>
        <th width="89px" align="left">
          Время
        </th>
        <th width="76px" align="left">
          Сотрудник
        </th>
        <th width="52px" align="left"></th>
        <th width="326px" align="left">
          Звонок
        </th>
        <th width="214px" align="left">
          Источник
        </th>
        <th width="461px" align="left">
          Оценка
        </th>
        <th width="89px" align="right">
          Длительность
        </th>
        <th width="40px"></th>
      </tr>
    </StyledHeaderTable>
  );
}

export default HeaderTable;
