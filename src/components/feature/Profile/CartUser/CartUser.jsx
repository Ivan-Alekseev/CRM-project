import {
  StyledCartUser,
  Email,
  Location,
  Name,
  PhoneNumber,
  Position,
  StyledIconPhoneOutline,
  StyledIconMailOutline,
  StyledIconLogout,
} from "./styles";

const data = {
  currentUser: {
    firstName: "Кирилл",
    lastName: "Упоров",
    position: "Директор",
    location: "Санкт-Петербург",
    phoneNumber: "8 (800) 333-17-21",
    email: "hi@skilla.ru",
  },
};

function CartUser() {
  return (
    <StyledCartUser>
      <StyledIconLogout />
      <Name>
        {data.currentUser.firstName} {data.currentUser.lastName}
      </Name>

      <div style={{ display: "flex", marginBottom: "20px" }}>
        <Position>{data.currentUser.position}</Position>
        <Location>{data.currentUser.location}</Location>
      </div>

      <PhoneNumber>
        <StyledIconPhoneOutline />
        {data.currentUser.phoneNumber}
      </PhoneNumber>

      <Email>
        <StyledIconMailOutline />
        {data.currentUser.email}
      </Email>
    </StyledCartUser>
  );
}

export default CartUser;
