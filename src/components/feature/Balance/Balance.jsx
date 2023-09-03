import {StyledBalance, Value, IconCrossBlue, Text, Wrapper} from './styles';

function Balance({balance}) {
  return (
    <StyledBalance>
      <Wrapper>
        <Text>Баланс:</Text>
        <Value>{balance} ₽</Value>
      </Wrapper>
      <IconCrossBlue />
    </StyledBalance>
  );
}

export default Balance;
