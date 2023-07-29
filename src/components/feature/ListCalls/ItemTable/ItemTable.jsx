import { IconIncomingCall, IconOutgoingCall } from "../../../shared/Icons";
import { CheckBox, Avatar, Grade } from "../../../shared/ui/index";
import { typeOfGrades } from "../../../shared/ui/Grade/styles";
import { IconTypeCall, Number, Source, StyleCheckBox, StyledItemTable } from "./styles";

function ItemTable( {
  inOut,
  date,
  personAvatar,
  fromNumber,
  source,
  durationCall

} ) {
  return (
  <>
    <StyledItemTable>
          <td >
              <CheckBox />
          </td>
        <IconTypeCall>
          { inOut ? 
            <IconIncomingCall /> 
            : <IconOutgoingCall /> 
          }
        </IconTypeCall>
        <td align="center">
          {date}
        </td>
        <td>
          <Avatar 
            personAvatar={
              personAvatar ? 
              personAvatar : 
              false }/>
        </td>
        <td align="left">
          <tr>
            <Number>
              {fromNumber}
            </Number>
          </tr>
          <tr>
            {/* <td>ООО «Грузчиков Сервис Запад»</td> */}
          </tr>
        </td>
        <Source>
          {source}
        </Source>
        <td align="left">
          <Grade type={typeOfGrades.BAD} />
        </td>
        <td align="right">
        {durationCall}
        </td>
    </StyledItemTable>
    </>
  );
}

export default ItemTable;
