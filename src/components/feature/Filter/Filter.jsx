import Select from "../Select/Select";
import { Content} from "./styles";
import { allCalls } from '../../../mocks/selects';

function Filter() {
  return (
    <Content>
      <Select label={allCalls.label} options={allCalls.options}/>
      <Select label={allCalls.label} options={allCalls.options}/>
      <Select label={allCalls.label} options={allCalls.options}/>
      <Select label={allCalls.label} options={allCalls.options}/>
    </Content>
  );
}

export default Filter;