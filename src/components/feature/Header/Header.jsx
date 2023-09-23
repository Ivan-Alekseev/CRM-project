import {allOrganizations} from '../../../mocks/selects';
import Profile from '../Profile/Profile';
import Select from '../Select/Select';
import {
  AnalyticsCalls,
  Line,
  NewCalls,
  Text,
  QuantityCalls,
  СonversionToOrder,
  StyledHeader,
  StyledHeaderWrapper,
  StyledIconSearch,
  Today,
  RightBlock,
  LeftBlock,
  StyledSelect,  
} from './styles';

function Header({
  newCalls = 20,
  allCalls = 30,
  quantityCalls = 40,
  conversion = 67,
}) {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <LeftBlock>
          <Today>Среда, 13 окт</Today>
          <AnalyticsCalls>
            <NewCalls>
              <Text>
                Новые звонки
                <span>
                  {' '}
                  {newCalls} из {allCalls} шт
                </span>
              </Text>
              <Line completion={newCalls / allCalls} />
            </NewCalls>
            <QuantityCalls>
              <Text>
                Качество разговоров
                <span> {quantityCalls} % </span>
              </Text>
              <Line completion={quantityCalls / 100} />
            </QuantityCalls>
            <СonversionToOrder>
              <Text>
                Конверсия в заказ
                <span> {conversion} % </span>
              </Text>
              <Line completion={conversion / 100} />
            </СonversionToOrder>
          </AnalyticsCalls>
        </LeftBlock>

        <RightBlock>
          <StyledIconSearch />
          <StyledSelect>
          <Select
            label={allOrganizations.label}
            options={allOrganizations.options}
          />
          </StyledSelect>
          <Profile />
        </RightBlock>
      </StyledHeaderWrapper>
    </StyledHeader>
  );
}

export default Header;
