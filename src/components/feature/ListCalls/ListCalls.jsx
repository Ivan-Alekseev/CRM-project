import {useEffect, useState} from 'react';
import HeaderTable from './HeaderTable/HeaderTable';
import {getList} from '../../../api/index';
import {
  IconIncomingCall,
  IconOutgoingCall,
  IconWeb,
} from './../../shared/Icons';
import {Avatar, CheckBox, Grade} from './../../shared/ui/index';
import {typeOfGrades} from './../../shared/ui/Grade/styles';
import {
  IconTypeCall,
  StyledItemTable,
  StyledListCalls,
  Source,
  UnknownCall,
  ContactCompany,
  ContactName,
  NumberCall,
} from './styles';
import {listCallsMocks} from '../../../mocks/list-calls';

function ListCalls() {
  const [data, setState] = useState([]);
  useEffect(() => {
    getList().then((res) => {
      // setState(res.results)

      setState(listCallsMocks.results);
    });
  }, []);

  const [listCheckBoxesChecked, setlistCheckBoxesChecked] = useState({});

  const handleClick = (id) => {
    const obj = {...listCheckBoxesChecked};
    if (obj[id]) {
      delete obj[id];
    } else {
      obj[id] = true;
    }
    setlistCheckBoxesChecked(() => obj);
  };

  const [isCheckedAllCheckbox, setCheckedAllCheckbox] = useState(false);
  const checkedAll = () => {
    const obj = {...listCheckBoxesChecked};
    setCheckedAllCheckbox(!isCheckedAllCheckbox);

    for (let result of data) {
      if (isCheckedAllCheckbox) {
        if (obj[result.id]) {
          delete obj[result.id];
        }
      } else {
        if (!obj[result.id]) {
          obj[result.id] = true;
        }
      }
    }
    setlistCheckBoxesChecked(() => obj);
  };

  return (
    <StyledListCalls>
      <table>
        <HeaderTable checkedAll={checkedAll} checked={isCheckedAllCheckbox} />
        <tbody>
          {data.map((result) => (
            <StyledItemTable>
              <td>
                <CheckBox
                  key={result.id}
                  checked={
                    listCheckBoxesChecked[result.id]
                      ? listCheckBoxesChecked[result.id]
                      : false
                  }
                  onClick={() => handleClick(result.id)}
                />
              </td>
              <IconTypeCall>
                {/*1 - входящий, 0 - исходящий */}
                {result.in_out ? <IconIncomingCall /> : <IconOutgoingCall />}
              </IconTypeCall>
              <td align="left">
                {/* время звонка */}
                {result.date
                  .replace(/([0-9]{4}-[0-9]{2}-[0-9]{2}\s)/, '')
                  .substr(0, 5)}
              </td>{' '}
              {/*result.date_notime\s */}
              <td>
                {/* аватарка */}
                {result.person_avatar ? (
                  <Avatar src={result.person_avatar} alt={'Manager'} />
                ) : (
                  false
                )}
              </td>
              <td>
                <div style={{display: 'flex', alignItems: 'center'}}>
                  {result.from_site ? <IconWeb /> : false}
                </div>
              </td>
              <td align="left">
                <>
                  {result.contact_name ? (
                    <>
                      <ContactName>{result.contact_name}</ContactName>
                      <ContactCompany>
                        {result.contact_company
                          ? result.contact_company
                          : false}
                      </ContactCompany>
                      <NumberCall>
                        {result.contact_company
                          ? false
                          : result.in_out
                          ? result.from_number
                          : result.to_number}
                      </NumberCall>
                    </>
                  ) : (
                    <UnknownCall>
                      {result.in_out ? result.from_number : result.to_number}
                    </UnknownCall>
                  )}
                </>
              </td>
              <Source>
                {/* источник */}
                {result.source}
              </Source>
              <td align="left">
                {/* оценка */}
                <Grade type={typeOfGrades.BAD} />
              </td>
              <td align="right">
                {/* длительность звонка  в минутах */}
                {result.time
                  ? `${parseInt(result.time / 60)}:${
                      result.time % 60 < 10
                        ? '0' + (result.time % 60)
                        : result.time % 60
                    }`
                  : false}
              </td>
              <td align="right">{}</td>
            </StyledItemTable>
          ))}
        </tbody>
      </table>
    </StyledListCalls>
  );
}

export default ListCalls;
