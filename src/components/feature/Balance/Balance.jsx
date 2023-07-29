import { StyledBalance, StyledBalanceValue, StyledIconCross } from "./styles";


const balanceDate = {
  balance:'272',
}

function Balance() {
  return (
      <StyledBalance>
        Баланс:
        <StyledBalanceValue>
           {balanceDate.balance} ₽
        </StyledBalanceValue>
         <StyledIconCross />
      </StyledBalance>
  );
}

export default Balance;