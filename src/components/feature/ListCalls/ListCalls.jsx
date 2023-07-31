import { useEffect, useState } from "react";
import HeaderTable from "./HeaderTable/HeaderTable";
import { getList } from "../../../api/index";
import { IconIncomingCall, IconOutgoingCall } from "./../../shared/Icons";
import { Avatar, CheckBox, Grade } from "./../../shared/ui/index";
import { typeOfGrades } from "./../../shared/ui/Grade/styles";
import { IconTypeCall, StyledItemTable, StyledListCalls, Number, Source } from "./styles";

function ListCalls() {
  const [data, setState] = useState([]);
  useEffect( ()=> {
    getList().then(res => {
      setState(res.results)
    });
  }, []);

  const [listCheckBoxesChecked, setlistCheckBoxesChecked] = useState({});
  
  const handleClick = (id)=> {
    const obj = {...listCheckBoxesChecked};
    if(obj[id]) {
     delete obj[id];
     } else {
      obj[id] = true;
    }
    console.log(obj);
    setlistCheckBoxesChecked(()=> obj);
  }

  return (
    <StyledListCalls>
      <table>
        <HeaderTable />
        <tbody>
          {data.map((result) => (
            <StyledItemTable>
              <td>
                <CheckBox 
                  key={result.id}
                  checked = { listCheckBoxesChecked[result.id] ? listCheckBoxesChecked[result.id] : false }
                  onClick = { () => handleClick(result.id)}
                />
              </td>
               <IconTypeCall>
                {/*1 - входящий, 0 - исходящий */}
                { result.in_out ? <IconIncomingCall /> : <IconOutgoingCall /> }
              </IconTypeCall>
              <td align="center">
                {/* время звонка */}
                { result.date.replace(`${result.date_notime} `, '') }
              </td>
              <td>
                {/* аватарка */}
                <Avatar personAvatar={
                                result.person_avatar ? 
                                result.person_avatar : 
                                false
                }/>
              </td>
              <td align="left">
                <tr>
                  <Number>
                    {/* номер телефона */}
                    {result.from_number}
                  </Number>
                </tr>
                <tr>
                  {/* <td>ООО «Грузчиков Сервис Запад»</td> */}
                </tr>
              </td>
              <Source>
                {/* источник */}
                {result.source}
              </Source>
              <td align="left">
                {/* источник */}
                <Grade type={typeOfGrades.BAD} />
              </td>
              <td align="right">
                {/* длительность звонка // вычислить минуты звонка!!! */}
                {result.time}
              </td>
            </StyledItemTable>
          ))}
        </tbody>
      </table>
    </StyledListCalls>
  );
}

export default ListCalls;
