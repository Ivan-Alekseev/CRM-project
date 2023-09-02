import { StyledHeaderTable } from "./styles";

function HeaderTable() {
  return (
    <StyledHeaderTable>
      <tr>
        <th width="40px" align="left" >
        </th>
        <th width="202px" align="left" >
          Менеджер
        </th>
        <th width="202px" align="left" >
          <tr>
            <th width="211px" align="left">
              <span>Разговоров<sup>шт</sup></span>
              
            </th>
          </tr>
          <tr>
            <th width="211px" align="left">
              <span>Распознано / По скрипту<sup>%</sup></span>
              
            </th>
          </tr>
        </th>
        <th width="127px" align="left">
          Конверсия
        </th>
        <th width="110px" align="left">
          Приветствовал клиента
        </th>
        <th width="110px" align="left">
          Спросил имя
        </th>
        <th width="110px" align="left">
          Правильно озвучил цену
        </th>
        <th width="110px" align="left">
          Сказал про скидку
        </th>
        <th width="110px" align="left">
          Сохранил предзаказ
        </th>
        <th width="92px" align="left">
          Поблагодарил за звонок
        </th>
        <th width="90px" align="left">
          Без стоп слов
        </th>
        <th width="70px" align="left">
          Оценка
        </th>
        <th width="40px">
        </th>
      </tr>
    </StyledHeaderTable>
  );
}

export default HeaderTable;
