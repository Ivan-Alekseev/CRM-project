import { useEffect, useState } from "react";
import HeaderTable from "./HeaderTable/HeaderTable";
import ItemTable from "./ItemTable/ItemTable";
import { StyledListCalls } from "./styles";
import { getList } from "../../../api/index";

function ListCalls() {
  const [ state, setState] = useState([])

  useEffect( ()=> {
    getList().then(res => {
      console.log(res.results);
      setState(res.results)
    });
  }, [])

  return (
    <StyledListCalls>
      <table>
          <HeaderTable />
        <tbody>
          
          {state.map(result => (
            <ItemTable
              key={result.id}
              inOut={result.in_out} //1 - входящий, 0 - исходящий
              date={
                result.date.replace(`${result.date_notime} `, '')
              } // время звонка
              personAvatar={result.person_avatar} //аватарка
              fromNumber={result.from_number} //номер телефона
              source={result.source} //источник
              durationCall={result.time} //длительность звонка // вычислить минуты звонка!!!
            />
          ))}
        </tbody>
        </table>
    </StyledListCalls>
  );
}

export default ListCalls;
